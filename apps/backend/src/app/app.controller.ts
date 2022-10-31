import {Controller, Get} from '@nestjs/common';

import constants from '@opres/shared/data/constants';

@Controller()
export class AppController {
  @Get()
  public getWelcomeMessage(): string {
    return `Welcome to opres.help/api! The current version is: v${constants.appVersion}`;
  }
}
