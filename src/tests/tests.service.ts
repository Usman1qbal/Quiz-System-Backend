import { Injectable, Req } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TestsService {
  tests: any = [];
  addTest(@Req() req: any): any {
    this.tests.push({ ...req.body, id: Math.floor(Math.random() * 100) });
    return this.tests;
  }

  getAllTest(): any {
    return this.tests;
  }

  getTest(@Req() req: any): any {
    const selectedTest = this.tests.filter((t) => t.id == req);
    const testQuestions = [];
    const questions = fs.readFileSync(
      path.resolve(__dirname, '../db/questions.json'),
      'utf-8',
    );
    const parsedResult = JSON.parse(questions);
    selectedTest[0].questionIds.forEach((q) => {
      const temp = parsedResult.filter((f) => f.id === q);
      testQuestions.push(temp[0]);
    });

    return {
      questions: testQuestions,
      id: selectedTest[0].id,
      questionIds: selectedTest[0].questionIds,
      title: selectedTest[0].title,
    };
  }
}
