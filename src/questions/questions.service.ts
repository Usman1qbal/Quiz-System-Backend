import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class QuestionsService {
  getQuestions(): any {
    const questions = fs.readFileSync(
      path.resolve(__dirname, '../db/questions.json'),
      'utf-8',
    );
    return questions;
  }
}
