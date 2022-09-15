import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../v3/auth/auth.service';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'key',
    });
  }

  async validate(email: string, key: string): Promise<any> {
    const id = this.authService.validateUser(email, key);
    if (!id) throw new HttpException('nok', 200);
    return { id };
  }
}
