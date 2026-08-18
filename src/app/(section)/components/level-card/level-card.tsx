import { LevelCardProps } from './level-card.types';

export const LevelCard = (props: LevelCardProps) => {
  const { description, name } = props;

  return (
    <div className="bg-gray-950 px-2 rounded-xl border border-gray-400">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};
