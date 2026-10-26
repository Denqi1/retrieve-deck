import { Level } from '@/features/setup-quiz-config/config/level';
import { TopicName } from '@/features/setup-quiz-config/config/topic/topic.types';
import { Count } from '@/features/setup-quiz-config/ui/count-cards/count-card/count-card.types';

export interface SessionPageProps {
  searchParams: Promise<{ topic?: TopicName; count?: Count; level?: Level }>;
}
