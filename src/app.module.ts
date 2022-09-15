import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V3Module } from './v3/v3.module';
import {
  APP_FILTER,
  APP_GUARD,
  APP_INTERCEPTOR,
  RouterModule,
} from '@nestjs/core';
import { CustomExceptionFilter } from './custom-exception.filter';
import { PrismaService } from './prisma/prisma.service';
import { JwtGuard } from './common/guard/jwt.guard';
import { JwtStrategy } from './common/strategy/JwtStrategy';
import { AuthModule } from './v3/auth/auth.module';
import { UserModule } from './v3/user/user.module';

import { StdModule } from './v3/std/std.module';
import { DoctorModule } from './v3/doctor/doctor.module';
import { JwtModule } from '@nestjs/jwt';
import { ResponseInterceptor } from './response.interceptor';
@Global()
@Module({
  imports: [
    V3Module,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
    RouterModule.register([
      {
        path: 'v3',
        module: V3Module,
        children: [
          {
            path: 'auth',
            module: AuthModule,
          },
          {
            path: 'user',
            module: UserModule,
          },
          {
            path: 'std',
            module: StdModule,
          },
          {
            path: 'doctor',
            module: DoctorModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    PrismaService,
    JwtStrategy,
  ],
  exports: [PrismaService],
})
export class AppModule {}
