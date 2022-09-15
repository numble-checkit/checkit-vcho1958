import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/common/decorator/Public';

@Controller()
export class V3Controller {
  @Public()
  @Get('test')
  public test(): {} {
    return {};
  }

  @Get('dashboard')
  public dashboard(): {} {
    return {};
  }
}
