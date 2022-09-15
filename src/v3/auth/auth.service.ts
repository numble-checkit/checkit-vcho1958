import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from '../../bcrypt/bcrypt.service';
import { AuthenticationToken } from '../user/user.controller';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly bcrypt: BcryptService,
  ) {}

  public async validateUser(email: string, key: string): Promise<string> {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new HttpException('no_user', 200);
    if (!this.bcrypt.compare(key, user.key)) return null;

    return user.id;
  }

  public async issue(id: string): Promise<AuthenticationToken> {
    const token = this.jwtService.sign(id, { secret: 'secret' });
    return { token };
  }
}
