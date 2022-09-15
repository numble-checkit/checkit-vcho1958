import { HttpException, Injectable } from '@nestjs/common';
import { AuthenticationToken, RegDto } from './user.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '../../../prisma/prisma/client';
import { BcryptService } from '../../bcrypt/bcrypt.service';
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
  ) {}

  private encodePassword(password: string): string {
    return this.bcryptService.encode(password);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  public async reg(data: RegDto): Promise<AuthenticationToken> {
    const key = this.encodePassword(data.key);
    const { id } = await this.prisma.user
      .create({ data: { ...data, key } })
      .catch((e) => {
        console.log(e);
        if (e.code === 'P2002') throw new HttpException('user_duplicate', 200);
        else throw new HttpException('nok', 200);
      });
    console.log(id);
    const token = this.jwtService.sign(id, {
      secret: 'secret',
    });

    return { token };
  }

  public async unreg(id: string): Promise<void> {
    this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
