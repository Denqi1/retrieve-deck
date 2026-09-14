import { LEVELS } from '../../config/level';
import { LevelCard } from './level-card';

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
