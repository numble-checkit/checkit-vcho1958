import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticationToken } from '../user/user.controller';
import { Public } from '../../common/decorator/Public';
import { LocalGuard } from 'src/common/guard/local.guard';
import { ResponseDto } from 'src/common/ResponseDto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Public()
  @Post('login')
  public async login(@Request() req): Promise<AuthenticationToken> {
    const { user } = req;
    const data = await this.authService.issue(user);
    return data;
  }
}
