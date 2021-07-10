import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testService: TestsService) {}
  @Post('add')
  getHello(@Req() req, @Res() res: any): any {
    const tests = this.testService.addTest(req);
    return res.status(HttpStatus.OK).json(tests);
  }

  @Get('all')
  getAllTests(@Res() res: any): any {
    const tests = this.testService.getAllTest();
    return res.status(HttpStatus.OK).json(tests);
  }

  @Get(':id')
  getTest(@Req() req, @Res() res: any): any {
    const tests = this.testService.getTest(req.params.id);
    return res.status(HttpStatus.OK).json(tests);
  }
}
