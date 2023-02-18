import {Module} from '@nestjs/common';

import {BnbService} from './services/bnb.service';
import {ReduceService} from './services/reduce.service';
import {TspController} from './tsp.controller';

@Module({
  controllers: [TspController],
  providers: [BnbService, ReduceService],
})
export class TspModule {}
