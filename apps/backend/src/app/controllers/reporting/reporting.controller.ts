import {Controller, Post} from '@nestjs/common';

@Controller('reporting')
export class ReportingController {
  @Post()
  public createNewReport() {
    console.log('wip');
  }
}
