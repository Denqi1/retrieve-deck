'use client';

import { ButtonProps } from './button.types';
import { LoaderSvg } from '../loader-svg';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-lg cursor-pointer transition-colors disabled:50',
  {
    variants: {
      variant: {
        primary:
          'text-cta-text bg-cta-bg hover:text-cta-text-hover hover:bg-cta-bg-hover',
        text: 'bg-transparent text-muted hover:text-cta-text-hover',
      },
      size: {
        xs: 'h-6 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export const Button = (props: ButtonProps) => {
  const {
    text,
    onClick,
    isDisabled,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
  } = props;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(buttonVariants({ variant, size }), className)}
      disabled={isDisabled || isLoading}
    >
      <span className={isLoading ? `mr-3` : ``}>{text}</span>
      {isLoading && <LoaderSvg />}
    </button>
  );
};
