'use client';

import { Topic, TOPICS } from '../../config/topic';
import { useSetupStore } from '../../model/use-setup-store';
import { TopicCard } from './topic-card';

export const TopicCards = () => {
  const pickedTopic = useSetupStore((state) => state.topic);
  const setTopic = useSetupStore((state) => state.setTopic);

  const handleClick = (topic: Topic) => {
    setTopic(topic);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {TOPICS.map((topic) => {
        const { id, name } = topic;

        return (
          <TopicCard
            key={id}
            id={id}
            name={name}
            onClick={handleClick}
            isPicked={pickedTopic.id === id}
          />
        );
      })}
    </div>
  );
};
