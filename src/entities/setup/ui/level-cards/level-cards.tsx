import { LevelCard } from '../level-card/level-card';
import { LevelCardModel } from './level-cards.types';

const LEVELS: LevelCardModel[] = [
  { name: 'junior', description: 'recall & syntax' },
  { name: 'middle', description: 'how & why' },
  { name: 'senior', description: 'trade-offs & internals' },
];

export const LevelCards = () => {
  return (
    <div className="flex gap-2">
      {LEVELS.map((level) => {
        return (
          <LevelCard
            key={level.name}
            levelName={level.name}
            levelDescription={level.description}
          />
        );
      })}
    </div>
  );
};
