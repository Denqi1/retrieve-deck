import { Card } from '@/shared/ui/card';
import { TopicCardProps } from './topic-card.types';

export const TopicCard = (props: TopicCardProps) => {
  const { name, onClick, isPicked, id } = props;

  const handleClick = () => {
    onClick({ id, name });
  };

  return (
    <Card
      onClick={handleClick}
      className={
        isPicked
          ? 'border-[#7ee787] text-[#7ee787]'
          : 'border-[#23262b] text-[#8b909b]'
      }
    >
      <p>{name}</p>
    </Card>
  );
};
