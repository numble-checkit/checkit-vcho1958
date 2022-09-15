import { Module } from '@nestjs/common';
import { V3Controller } from './v3.controller';
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { StdModule } from './std/std.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [V3Controller],
  imports: [UserModule, DoctorModule, AuthModule, StdModule],
})
export class V3Module {}
