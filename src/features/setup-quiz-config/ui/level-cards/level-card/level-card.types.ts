import { Level } from '@/features/setup-quiz-config/config/level';

export interface LevelCardProps {
  levelName: Level;
  levelDescription: string;
  isPicked: boolean;
  onClick: () => void;
}
