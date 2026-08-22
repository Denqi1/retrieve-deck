'use client';

import { Card } from '@/shared/ui/card/card';
import { useSetupStore } from '../../model/useSetupStore/useSetupStore';
import { LevelCardProps } from './level-card.types';

export const LevelCard = (props: LevelCardProps) => {
  const { levelDescription, levelName } = props;

  const pickedLevel = useSetupStore((state) => state.level);
  const setLevel = useSetupStore((state) => state.setLevel);

  const handleClick = () => {
    setLevel(levelName);
  };

  /**
   * TODO: Над дазиайном карточки ещё стоит поработать
   */
  return (
    <Card
      className={
        pickedLevel === levelName
          ? 'border-[#7ee787] text-[#7ee787]'
          : 'border-[#23262b] text-[#8b909b]'
      }
      onClick={handleClick}
    >
      <p>{levelName}</p>
      <p>{levelDescription}</p>
    </Card>
  );
};
