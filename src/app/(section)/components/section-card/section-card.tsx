import { SectionCardProps } from './section-card.types';

export const SectionCard = (props: SectionCardProps) => {
  const { name, color, onClick, isPicked, id } = props;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={`bg-gray-950 p-4 rounded-2xl border border-gray-400 w-36 flex justify-between`}
      onClick={handleClick}
    >
      <p className={color}>{name}</p>

      <input type="checkbox" onChange={handleClick} checked={isPicked} />
    </div>
  );
};
