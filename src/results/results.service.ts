import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultsService {
  results: any = [];
  getResults(): any {
    return this.results;
  }

  createResult(req: any) {
    let count = 0;
    req.questions.forEach((q) => {
      const ans = req.answers.filter((a) => a.questionId === q.id);
      if (ans.length) {
        if (ans[0].answer === q.answer) {
          count = count + 1;
        }
      }
    });
    const score = (count / 4) * 100;
    const result = {
      id: Math.floor(Math.random() * 100),
      score: score,
      duration: req.duration,
      title: req.title,
    };
    this.results.push(result);
    return this.results;
  }
}
