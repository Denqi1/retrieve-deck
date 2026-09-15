'use client';

import { Card } from '@/shared/ui/card';

import { LevelCardProps } from './level-card.types';

export const LevelCard = (props: LevelCardProps) => {
  const { levelDescription, levelName, isPicked, onClick } = props;

  /**
   * TODO: Над дазиайном карточки ещё стоит поработать
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
      <p>{levelName}</p>
      <p>{levelDescription}</p>
    </Card>
  );
};
