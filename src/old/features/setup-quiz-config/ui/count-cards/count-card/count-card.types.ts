export type Count = 8 | 16 | 24 | 32;

export interface CountCardProps {
  count: Count;
  isPicked: boolean;
  onClick: () => void;
}
