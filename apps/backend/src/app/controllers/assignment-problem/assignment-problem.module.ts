import {Module} from '@nestjs/common';

import {AssignmentProblemController} from './assignment-problem.controller';

@Module({
  controllers: [AssignmentProblemController],
})
export class AssignmentProblemModule {}
