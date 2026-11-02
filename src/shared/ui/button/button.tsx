'use client';

import { ButtonProps } from './button.types';

export const Button = (props: ButtonProps) => {
  const { text, onClick, isDisabled, className } = props;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer bg-green-300 rounded-lg text-xs p-2 text-black hover:bg-green-200 transition font-bold ${className}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
