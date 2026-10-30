export interface TopicCardProps {
  name: string;
  id: number;
  onClick: (topic: { id: number; name: string }) => void;
  isPicked: boolean;
}
