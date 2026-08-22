'use client';

import { useSetupStore } from '../../model/useSetupStore';
import { TopicCard } from '../topic-card';

export const TopicCards = () => {
  const topics = useSetupStore((state) => state.topics);
  const pickedTopic = useSetupStore((state) => state.pickedTopic);
  const setTopic = useSetupStore((state) => state.setTopic);

  const handleClick = (sectionId: number) => {
    setTopic(sectionId);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {topics.map((topic) => {
        const { id, name } = topic;

        return (
          <TopicCard
            key={id}
            id={id}
            name={name}
            onClick={handleClick}
            isPicked={pickedTopic === id}
          />
        );
      })}
    </div>
  );
};
