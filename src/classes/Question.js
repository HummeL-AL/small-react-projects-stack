export class Question {
  constructor(text, valid_answer, fake_answers) {
    this.text = text;
    this.valid_answer = valid_answer;
    this.fake_answers = fake_answers;
  }
}
