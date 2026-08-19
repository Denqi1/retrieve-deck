export interface SectionCardProps {
  name: string;
  color: string;
  id: number;
  onClick: (sectionId: number) => void;
  isPicked: boolean;
}
