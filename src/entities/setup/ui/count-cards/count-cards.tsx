import { PRESET_COUNT_QUESTION_CARDS } from '../../config/count';
import { CountCard } from '../count-card';

export const CountCards = () => {
  return (
    <div className="flex gap-2">
      {PRESET_COUNT_QUESTION_CARDS.map((count) => {
        return <CountCard key={count} count={count} />;
      })}
    </div>
  );
};
