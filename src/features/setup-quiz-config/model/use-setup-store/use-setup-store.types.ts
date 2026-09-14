import { Question } from '@/entities/question/api/get-question/get-question.types';
import { Topic } from '../../config/topic';
import { Level } from '../../config/level';

interface Answer {
  text: string;
  questionId: string;
}

interface CurrentQuestion extends Question {
  number: number;
}

export interface State {
  topic: Topic;
  countCards: number;
  level: Level;
  questions: Question[];
  currentQuestion: CurrentQuestion | null;
  answers: Answer[];
  answer: string;
}

export interface Actions {
  setTopic: (topic: Topic) => void;
  setCountCards: (count: number) => void;
  setLevel: (level: Level) => void;
  addQuestion: (question: Question) => void;
  setNextQuestion: (question: Question) => void;
  addAnswer: (answer: Answer) => void;
  setAnswer: (value: string) => void;
}
