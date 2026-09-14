'use client';

import { Card } from '@/shared/ui/card';
import { useSetupStore } from '../../../model/use-setup-store';
import { CountCardProps } from './count-card.types';

export const CountCard = (props: CountCardProps) => {
  const { count } = props;

  const pickedCount = useSetupStore((state) => state.countCards);
  const setCount = useSetupStore((state) => state.setCountCards);

  const handleClick = () => {
    setCount(count);
  };

  /**
   * TODO: Идея добавить разный цвет выделения. Типо мидл ораньжевый, а сеньёр красный.
   */
  return (
    <Card
      className={
        pickedCount === count
          ? 'border-[#7ee787] text-[#7ee787]'
          : 'border-[#23262b] text-[#8b909b]'
      }
      onClick={handleClick}
    >
      <p>{count}</p>
    </Card>
  );
};
