import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BcryptService } from '../../bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserService, BcryptService, JwtService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
