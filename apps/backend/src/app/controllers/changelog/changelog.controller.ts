import {Controller, Get, Res} from '@nestjs/common';

import {Response} from 'express';

@Controller('changelog')
export class ChangelogController {
  @Get()
  public getChangelogContentInMD(@Res() res: Response) {
    res.sendFile(__dirname + '/assets/CHANGELOG.md', {
      headers: {
        'Content-Type': 'text/markdown',
      },
    });
  }
}
