export interface ButtonProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  isLoading?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'primary' | 'text';
}
