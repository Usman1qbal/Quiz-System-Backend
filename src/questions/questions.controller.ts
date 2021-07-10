import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  getHello(@Res() res: any): any {
    const questions = this.questionService.getQuestions();
    const parsedQuestions = JSON.parse(questions);
    const shuffled = parsedQuestions.sort(() => 0.5 - Math.random());

    return res.status(HttpStatus.OK).json(shuffled.slice(0, 8));
  }
}
