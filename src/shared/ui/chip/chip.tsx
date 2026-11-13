'use client';

import { ChipProps } from './chip.types';

export const Chip = (props: ChipProps) => {
  const { onChange, text, className = '', isChecked } = props;

  const handleChange = () => {
    onChange?.();
  };

  return (
    <div
      onClick={handleChange}
      className={`bg-surface-panel text-muted border-default flex gap-2 p-2 rounded-xl w-full cursor-pointer transition-colors hover:bg-cta-bg-hover ${className}`}
    >
      <label className="cursor-pointer">
        <input
          onChange={handleChange}
          className="cursor-pointer accent-surface-element mr-2"
          type="checkbox"
          checked={isChecked}
        />
        <span>{text}</span>
      </label>
    </div>
  );
};
