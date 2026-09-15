'use client';

import { ChangeEvent, useState } from 'react';

import { Question } from '../../api/get-question/get-question.types';
import { getQuestion } from '../../api/get-question/get-question';
import { useSetupStore } from '@/features/setup-quiz-config/model/use-setup-store';
import { useRouter } from 'next/navigation';
import { Count } from '@/features/setup-quiz-config/ui/count-cards/count-card/count-card.types';
import { Level } from '@/features/setup-quiz-config/config/level';
import { TopicName } from '@/features/setup-quiz-config/config/topic/topic.types';

export const SessionForm = ({
  question,
  count,
  level,
  topic,
}: {
  question: Question;
  count: Count;
  level: Level;
  topic: TopicName;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(question);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [listPreviousTopics, setListPreviousTopics] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');

  const addAnswer = useSetupStore((state) => state.addAnswer);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async () => {
    addAnswer({ text: answer, questionId: currentQuestion.id });
    setAnswer('');
    setListPreviousTopics((prev) => [...prev, currentQuestion.topic]);

    if (numberQuestion >= count) {
      router.push('/setup/session/result');

      return;
    }

    setNumberQuestion((prev) => prev + 1);
    setIsLoadingQuestion(true);

    const dataQuestion = await getQuestion({
      topic,
      level,
      listPreviousTopics: [...listPreviousTopics, currentQuestion.topic],
    });

    setIsLoadingQuestion(false);

    if (!dataQuestion) {
      console.error('NO DATA QUESTION!');
      return;
    }

    setCurrentQuestion(dataQuestion);
  };

  return (
    <div className="flex flex-col gap-8">
      <h1>
        Количество вопросов - {count}, текущий - {numberQuestion}
      </h1>

      {isLoadingQuestion ? <p>Loading...</p> : <p>{currentQuestion.text}</p>}

      <div className="border border-amber-50">
        <label htmlFor="answer">Your Answer:</label>
        <textarea
          id="answer"
          name="answer"
          rows={4}
          cols={50}
          placeholder="Type your answer here..."
          onChange={handleChange}
          value={answer}
        ></textarea>
      </div>

      <button
        disabled={isLoadingQuestion}
        onClick={handleSubmit}
        className="cursor-pointer bg-gray-900"
      >
        {numberQuestion < count ? 'Submit' : 'Finish'}
      </button>
    </div>
  );
};
