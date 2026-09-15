'use client';

import { useState } from 'react';

import { SetupButton } from '../setup-button';
import { TopicCards } from '../topic-cards';
import { CountCards } from '../count-cards';
import { LevelCards } from '../level-cards';
import { Topic } from '../../config/topic/topic.types';
import { Count } from '../count-cards/count-card/count-card.types';
import { Level } from '../../config/level';
import { TOPICS } from '../../config/topic';

export const SetupForm = () => {
  const [topic, setTopic] = useState<Topic>(TOPICS[0]);
  const [count, setCount] = useState<Count>(8);
  const [level, setLevel] = useState<Level>('junior');

  const handleTopicChoose = (topic: Topic) => {
    setTopic(topic);
  };

  const handleCountChoose = (count: Count) => {
    setCount(count);
  };

  const handleLevelChoose = (level: Level) => {
    setLevel(level);
  };

  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li>
          <p className="text-xs text-[#565b64]">TOPICS:</p>
          <TopicCards onClick={handleTopicChoose} pickedTopic={topic} />
        </li>

        <li>
          <p className="text-xs text-[#565b64]">COUNT:</p>
          <CountCards onClick={handleCountChoose} pickedCount={count} />
        </li>

        <li>
          <p className="text-xs text-[#565b64]">LEVEL:</p>
          <LevelCards onClick={handleLevelChoose} pickedLevel={level} />
        </li>
      </ul>

      <SetupButton count={count} level={level} topic={topic.name} />
    </div>
  );
};
