import { SectionCardProps } from './section-card.types';

export const SectionCard = (props: SectionCardProps) => {
  const { name, color, onClick, isPicked, id } = props;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={`bg-[#0f1114] p-4 rounded-xl border border-[#23262b] w-36 flex justify-between cursor-pointer`}
      onClick={handleClick}
    >
      <p className={color}>{name}</p>

      <input
        className="cursor-pointer"
        type="checkbox"
        onChange={handleClick}
        checked={isPicked}
      />
    </div>
  );
};
