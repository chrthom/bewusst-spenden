export class Answer {
  toId: string;
  image: string;
  title: string;
  subtitle: string;
}

export class Question {
  id: string;
  title: string;
  question: string;
  answers: Answer[];
}
