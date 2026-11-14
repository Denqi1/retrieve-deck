'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Chip } from '@/shared/ui/chip';
import { SectionTitle } from '@/shared/ui/section-title';

const SESSION_LEVELS: SessionLevel[] = [
  {
    name: 'junior',
    description: 'Базовые понятия, определения, «что это и зачем»',
  },
  {
    name: 'middle',
    description: 'Как работает под капотом, типичные кейсы и ошибки',
  },
  {
    name: 'senior',
    description: 'Trade-offs, архитектура, edge cases, «почему так»',
  },
];
const SESSION_TOPICS: SessionTopic[] = ['JS', 'React', 'TS'];

type SessionTopic = 'JS' | 'React' | 'TS';
type SessionLevelName = 'junior' | 'middle' | 'senior';

interface SessionLevel {
  name: SessionLevelName;
  description: string;
}

export const SessionSetupForm = () => {
  const [topics, setTopics] = useState<SessionTopic[]>([]);
  const [levelName, setLevelName] = useState<SessionLevelName>('junior');

  const onTopicsChange = (topicName: SessionTopic) => {
    const hasTopic = topics.includes(topicName);

    if (hasTopic) {
      const newTopics = topics.filter((topic) => topic !== topicName);
      setTopics(newTopics);

      return;
    }

    setTopics([...topics, topicName]);
  };

  const onLevelPick = (levelName: SessionLevelName) => {
    setLevelName(levelName);
  };

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <SectionTitle number={1} title="topics" />

          <div className="flex gap-3 text-xs items-center">
            <Button size="xs" variant="text" text="all" />
            <Button size="xs" variant="text" text="clear" />
            <p>
              {topics.length} / {SESSION_TOPICS.length}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-4">
          {SESSION_TOPICS.map((topicName) => {
            const handleChange = () => {
              onTopicsChange(topicName);
            };

            return (
              <li key={topicName}>
                <Chip
                  text={topicName}
                  isChecked={topics.includes(topicName)}
                  onChange={handleChange}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle number={2} title="level" />

        <div className="flex gap-2">
          {SESSION_LEVELS.map((level) => {
            const { description, name } = level;

            const handleClick = () => {
              onLevelPick(name);
            };

            return (
              <Card
                key={name}
                title={name}
                description={description}
                className={`${levelName === name ? 'bg-surface-element' : 'bg-surface-card'} max-w-40`}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>

      <Button size="lg" text="Start session" className="self-start" />
    </form>
  );
};
