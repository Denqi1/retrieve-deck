import { Card } from '@/shared/ui/card';
import { SVGProps } from 'react';

export const WarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14.008l-7-12-7 12h14zM7 6.016a1 1 0 012 0v3a1 1 0 11-2 0v-3zm1 6.953a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
};

interface QuestionRowProps {
  number: number;
  text: string;
  themeTag: string;
}

export const QuestionRow = (props: QuestionRowProps) => {
  const { number, text, themeTag } = props;

  return (
    <Card className="border-[#23262b]">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <WarningIcon width={32} height={32} color="yellow" />

          <p>{number}</p>
        </div>

        <p className="flex-1">{text}</p>

        <div>
          <p>{themeTag}</p>
        </div>
      </div>
    </Card>
  );
};
