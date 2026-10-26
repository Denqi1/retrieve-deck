import { Level } from '@/features/setup-quiz-config/config/level';
import { TopicName } from '@/features/setup-quiz-config/config/topic/topic.types';
import { Count } from '@/features/setup-quiz-config/ui/count-cards/count-card/count-card.types';

export interface Question {
  id: string;
  text: string;
  topic: string;
  type: string;
  additionalQuestions: string[];
}

export interface GetQuestionOptions {
  topic: TopicName;
  level: Level;
  previousTopics: string[];
  count: Count;
}
