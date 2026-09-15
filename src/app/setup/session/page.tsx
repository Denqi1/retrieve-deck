import { getQuestion } from '@/entities/question/api/get-question/get-question';
import { SessionForm } from '@/entities/question/ui/session-form/session-form';
import { Level } from '@/features/setup-quiz-config/config/level';
import { TopicName } from '@/features/setup-quiz-config/config/topic/topic.types';
import { Count } from '@/features/setup-quiz-config/ui/count-cards/count-card/count-card.types';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ topic?: TopicName; count?: Count; level?: Level }>;
}) {
  const { count, level, topic } = await searchParams;

  if (!level || !topic || !count) {
    console.error('no topic or level or count');

    return <div>ERROR!</div>;
  }

  const dataQuestion = await getQuestion({
    topic,
    level,
    listPreviousTopics: [],
  });

  if (!dataQuestion) {
    return <div>Undefined</div>;
  }

  return (
    <div>
      <SessionForm
        question={dataQuestion}
        count={count}
        level={level}
        topic={topic}
      />
    </div>
  );
}
