import { PRESET_COUNT_QUESTION_CARDS } from '../../config/count';

import { CountCard } from './count-card';
import { Count } from './count-card/count-card.types';

export const CountCards = ({
  onClick,
  pickedCount,
}: {
  onClick: (count: Count) => void;
  pickedCount: Count;
}) => {
  return (
    <div className="flex gap-2">
      {PRESET_COUNT_QUESTION_CARDS.map((count) => {
        const handleClick = () => {
          onClick(count);
        };

        return (
          <CountCard
            key={count}
            onClick={handleClick}
            count={count}
            isPicked={pickedCount === count}
          />
        );
      })}
    </div>
  );
};
