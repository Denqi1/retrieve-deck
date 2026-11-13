'use client';

import { CardProps } from './card.types';

export const Card = (props: CardProps) => {
  const { onClick, description, title, className } = props;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col gap-4 bg-surface-card p-4 rounded-xl cursor-pointer transition-colors border border-default hover:bg-cta-bg-hover ${className}`}
    >
      <div className="flex justify-between">
        <p className="text-sm text-primary">{title}</p>
      </div>

      <p className="text-xs text-secondary">{description}</p>
    </div>
  );
};
