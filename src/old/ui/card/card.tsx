'use client';

import { CardProps } from './card.types';

export const Card = (props: CardProps) => {
  const { children, onClick, className } = props;

  const handleClick = () => {
    onClick?.();
  };

  /**
   * TODO: Идея добавить разный цвет выделения. Типо мидл ораньжевый, а сеньёр красный.
   */
  return (
    <div
      className={`bg-[#0f1114] px-4 py-2 rounded-xl border cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
