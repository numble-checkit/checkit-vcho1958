import { Module } from '@nestjs/common';
import { StdController } from './std.controller';
import { StdService } from './std.service';

@Module({
  controllers: [StdController],
  providers: [StdService]
})
export class StdModule {}
