import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptService } from '../../bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from '../../common/strategy/LocalStrategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, JwtService, LocalStrategy, BcryptService],
})
export class AuthModule {}
