import { Level, LEVELS } from '../../config/level';
import { LevelCard } from './level-card';

export const LevelCards = ({
  onClick,
  pickedLevel,
}: {
  onClick: (level: Level) => void;
  pickedLevel: Level;
}) => {
  return (
    <div className="flex gap-2">
      {LEVELS.map((level) => {
        const handleClick = () => {
          onClick(level.name);
        };

        return (
          <LevelCard
            key={level.name}
            levelName={level.name}
            levelDescription={level.description}
            onClick={handleClick}
            isPicked={pickedLevel === level.name}
          />
        );
      })}
    </div>
  );
};
