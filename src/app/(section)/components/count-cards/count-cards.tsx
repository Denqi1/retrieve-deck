import { CountCard } from '../count-card/count-card';

const PRESET_COUNT_QUESTION_CARDS = [8, 16, 24, 32];

export const CountCards = () => {
  return (
    <div className="flex gap-2">
      {PRESET_COUNT_QUESTION_CARDS.map((count) => {
        return <CountCard key={count} count={count} />;
      })}
    </div>
  );
};
