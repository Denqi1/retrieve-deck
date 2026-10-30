import { Count } from '@/old/features/setup-quiz-config/ui/count-cards/count-card/count-card.types';
import { Level } from '@/old/features/setup-quiz-config/config/level';
import { TopicName } from '@/old/features/setup-quiz-config/config/topic/topic.types';
import { Question } from '../../api/get-question/get-question.types';

export interface SessionFormProps {
  questions: Question[];
  count: Count;
  level: Level;
  topic: TopicName;
}
