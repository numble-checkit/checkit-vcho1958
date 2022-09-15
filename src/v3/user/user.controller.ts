import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../../common/decorator/Public';

export interface RegDto {
  type: string;
  email: string;
  key: string;
  name: string;
}

export interface AuthenticationToken {
  token: string;
}

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('reg')
  public async reg(@Body() regDto: RegDto): Promise<AuthenticationToken> {
    return this.userService.reg(regDto);
  }

  @Post('unreg')
  public async unreg(@Req() req): Promise<void> {
    const { id } = req.user;
    this.userService.unreg(id);
  }
}
