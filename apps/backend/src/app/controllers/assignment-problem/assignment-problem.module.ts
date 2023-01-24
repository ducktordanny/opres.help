import {Module} from '@nestjs/common';

import {HungarianMethodService} from './services/hungarian-method.service';
import {KoenigAlgorithmService} from './services/koenig-algorithm.service';
import {ReduceService} from './services/reduce.service';
import {AssignmentProblemController} from './assignment-problem.controller';

@Module({
  controllers: [AssignmentProblemController],
  providers: [HungarianMethodService, KoenigAlgorithmService, ReduceService],
})
export class AssignmentProblemModule {}
