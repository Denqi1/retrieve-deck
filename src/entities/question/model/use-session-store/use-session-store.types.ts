export interface Answer {
  text: string;
  questionId: string;
}

export interface State {
  answers: Answer[];
}

export interface Actions {
  addAnswer: (answer: Answer) => void;
}
