import { LevelCard } from '../level-card/level-card';

const LEVELS = [
  { name: 'junior', description: 'recall & syntax' },
  { name: 'middle', description: 'how & why' },
  { name: 'senior', description: 'trade-offs & internals' },
];

export const LevelCards = () => {
  return (
    <div className="flex gap-2">
      {LEVELS.map((level) => {
        return <LevelCard key={level.name} {...level} />;
      })}
    </div>
  );
};
