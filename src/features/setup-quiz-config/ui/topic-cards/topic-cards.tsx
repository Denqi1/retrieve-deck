'use client';

import { Topic, TOPICS } from '../../config/topic';

import { TopicCard } from './topic-card';

export const TopicCards = ({
  onClick,
  pickedTopic,
}: {
  onClick: (topic: Topic) => void;
  pickedTopic: Topic;
}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {TOPICS.map((topic) => {
        const { id, name } = topic;

        const handleClick = () => {
          onClick(topic);
        };

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
