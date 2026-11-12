import { CardProps } from './card.types';

export const Card = (props: CardProps) => {
  const { onClick, description, title } = props;

  return (
    <div className="flex flex-col gap-4 bg-gray-950 p-4 rounded-xl cursor-pointer">
      <div className="flex justify-between">
        <p className="text-sm text-green-800">{title}</p>
        <div>
          <span>+</span>
          <span>-</span>
          <span>-</span>
        </div>
      </div>

      <p className="text-xs">{description}</p>
    </div>
  );
};
