import { Body, Controller, Post } from '@nestjs/common';
import { StdService } from './std.service';

export interface StdRegDto {
  doctor_id: string;
  address: string;
  address_code: string;
  store_address: string;
}

@Controller()
export class StdController {
  constructor(private readonly stdService: StdService) {}

  @Post('reg')
  public async reg(@Body() stdRegDto: StdRegDto): Promise<void> {
    return this.stdService.reg(stdRegDto);
  }
}
