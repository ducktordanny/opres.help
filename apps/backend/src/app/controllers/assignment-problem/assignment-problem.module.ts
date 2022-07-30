import {Module} from '@nestjs/common';

import {FirstPhaseService} from './services/first-phase.service';
import {SecondPhaseService} from './services/second-phase.service';
import {AssignmentProblemController} from './assignment-problem.controller';

@Module({
  controllers: [AssignmentProblemController],
  providers: [FirstPhaseService, SecondPhaseService],
})
export class AssignmentProblemModule {}
