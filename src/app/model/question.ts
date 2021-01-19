export class Answer {
  toId: string;
  image: string;
  title: string;
  subtitle: string;
  blackFont: boolean;
}

export class Question {
  id: string;
  title: string;
  question: string;
  answers: Answer[];
}
