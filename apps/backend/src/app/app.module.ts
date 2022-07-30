import {Module} from '@nestjs/common';

import {AssignmentProblemModule} from './controllers/assignment-problem/assignment-problem.module';
import {TransportProblemModule} from './controllers/transport-problem/transport-problem.module';
import {AppController} from './app.controller';

@Module({
  imports: [TransportProblemModule, AssignmentProblemModule],
  controllers: [AppController],
})
export class AppModule {}
