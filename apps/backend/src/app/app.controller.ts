import {Controller, Get} from '@nestjs/common';

import {Stocks} from '@opres/shared-interfaces';

@Controller()
export class AppController {
  private test: Stocks = [];

  @Get('hello')
  public getWelcomeMessage(): string {
    return 'Welcome to opres.help/api';
  }
}
