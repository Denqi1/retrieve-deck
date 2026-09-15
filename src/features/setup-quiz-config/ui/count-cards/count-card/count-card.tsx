'use client';

import { Card } from '@/shared/ui/card';

import { CountCardProps } from './count-card.types';

export const CountCard = (props: CountCardProps) => {
  const { count, onClick, isPicked } = props;

  /**
   * TODO: Идея добавить разный цвет выделения. Типо мидл ораньжевый, а сеньёр красный.
   */
  return (
    <Card
      className={
        isPicked
          ? 'border-[#7ee787] text-[#7ee787]'
          : 'border-[#23262b] text-[#8b909b]'
      }
      onClick={onClick}
    >
      <p>{count}</p>
    </Card>
  );
};
