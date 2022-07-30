import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  public getWelcomeMessage(): string {
    return 'Welcome to opres.help/api';
  }
}
