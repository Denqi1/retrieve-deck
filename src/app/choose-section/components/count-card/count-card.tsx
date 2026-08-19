'use client';

import { useSectionStore } from '../../page';
import { CountCardProps } from './count-card.types';

export const CountCard = (props: CountCardProps) => {
  const { count } = props;

  const pickedCount = useSectionStore((state) => state.countCards);
  const setCount = useSectionStore((state) => state.setCountCards);

  const handleClick = () => {
    setCount(count);
  };

  /**
   * TODO: Идея добавить разный цвет выделения. Типо мидл ораньжевый, а сеньёр красный.
   */
  return (
    <div
      className={`bg-[#0f1114] px-4 py-2 rounded-xl border cursor-pointer ${pickedCount === count ? 'border-[#7ee787] text-[#7ee787]' : 'border-[#23262b] text-[#8b909b]'}`}
      onClick={handleClick}
    >
      <p>{count}</p>
    </div>
  );
};
