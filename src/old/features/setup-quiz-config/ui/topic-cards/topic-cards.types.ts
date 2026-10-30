import { Topic } from '../../config/topic';

export interface TopicCardsProps {
  onClick: (topic: Topic) => void;
  pickedTopic: number | null;
}
