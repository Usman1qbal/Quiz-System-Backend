import { Controller, Get, Post, Req } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}
  @Get('/')
  getHello(): string {
    return this.resultsService.getResults();
  }

  @Post('create')
  createResult(@Req() req: any): any {
    return this.resultsService.createResult(req.body);
  }
}
