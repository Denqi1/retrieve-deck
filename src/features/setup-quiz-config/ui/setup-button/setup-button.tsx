'use client';

import Link from 'next/link';

import { preloadQuestion } from '@/entities/question/api/get-question/get-question';
import { Level } from '../../config/level';
import { Count } from '../count-cards/count-card/count-card.types';
import { TopicName } from '../../config/topic/topic.types';

export const SetupButton = ({
  level,
  topic,
  count,
}: {
  level: Level;
  topic: TopicName;
  count: Count;
}) => {
  return (
    <Link
      href={{ pathname: '/setup/session', query: { level, topic, count } }}
      onClick={() => {
        preloadQuestion({
          level,
          topic,

          // Вот с этим кончено вопросик
          listPreviousQuestions: [],
        });
      }}
    >
      RUN
    </Link>
  );
};
