'use client';

import Link from 'next/link';

import { preloadQuestion } from '@/entities/question/api/get-question/get-question';

export const SetupButton = () => {
  return (
    <Link
      href={'/setup/session'}
      onClick={() => {
        preloadQuestion({
          level: 'junior',
          listPreviousQuestions: [],
          topic: 'javascript',
        });
      }}
    >
      RUN
    </Link>
  );
};
