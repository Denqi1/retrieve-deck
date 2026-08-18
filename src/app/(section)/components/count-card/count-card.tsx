import { CountCardProps } from './count-card.types';

export const CountCard = (props: CountCardProps) => {
  const { count } = props;

  return (
    <div className="bg-gray-950 px-2 rounded-xl border border-gray-400">
      <p>{count}</p>
    </div>
  );
};
