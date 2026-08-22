export interface TopicCardProps {
  name: string;
  id: number;
  onClick: (topicId: number) => void;
  isPicked: boolean;
}
