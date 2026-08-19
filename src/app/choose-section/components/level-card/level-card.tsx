'use client';

import { useSectionStore } from '../../page';
import { LevelCardProps } from './level-card.types';

export const LevelCard = (props: LevelCardProps) => {
  const { levelDescription, levelName } = props;

  const pickedLevel = useSectionStore((state) => state.level);
  const setLevel = useSectionStore((state) => state.setLevel);

  const handleClick = () => {
    setLevel(levelName);
  };

  /**
   * TODO: Над дазиайном карточки ещё стоит поработать
   */
  return (
    <div
      className={`bg-[#0f1114] p-4 rounded-xl border cursor-pointer ${pickedLevel === levelName ? 'border-[#7ee787] text-[#7ee787]' : 'border-[#23262b] text-[#8b909b]'}  `}
      onClick={handleClick}
    >
      <p>{levelName}</p>
      <p>{levelDescription}</p>
    </div>
  );
};
