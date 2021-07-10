import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { TestsController } from './tests/tests.controller';
import { ResultsController } from './results/results.controller';
import { ResultsService } from './results/results.service';
import { TestsService } from './tests/tests.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    QuestionsController,
    ResultsController,
    TestsController,
  ],
  providers: [AppService, QuestionsService, ResultsService, TestsService],
})
export class AppModule {}
