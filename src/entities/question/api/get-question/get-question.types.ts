export interface Question {
  id: string;
  text: string;
  topic: string;
  type: string;
}

export interface GetQuestionOptions {
  topic: string;
  level: string;
  listPreviousTopics: string[];
}
