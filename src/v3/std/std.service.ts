import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StdRegDto } from './std.controller';

@Injectable()
export class StdService {
  constructor(private readonly prisma: PrismaService) {}
  public async reg(stdRegDto: StdRegDto): Promise<void> {
    this.prisma.diagnose.create({ data: stdRegDto }).catch(() => {
      throw new HttpException('nok', 200);
    });
  }
}
