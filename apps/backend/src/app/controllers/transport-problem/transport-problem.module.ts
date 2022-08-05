import {Module} from '@nestjs/common';

import {NorthWestMethodService} from './services/first-phase/north-west.method.service';
import {TableMinimumMethodService} from './services/first-phase/table-minimum.method.service';
import {VogelKordaMethodService} from './services/first-phase/vogel-korda.method.service';
import {SecondPhaseService} from './services/second-phase.service';
import {TransportProblemController} from './transport-problem.controller';

@Module({
  controllers: [TransportProblemController],
  providers: [
    NorthWestMethodService,
    SecondPhaseService,
    TableMinimumMethodService,
    VogelKordaMethodService,
  ],
})
export class TransportProblemModule {}
