'use client';

import { ChangeEvent, useState } from 'react';

import { Question } from '../../api/get-question/get-question.types';

import { useRouter } from 'next/navigation';

import { useSessionStore } from '../../model/use-session-store/use-session-store';
import { SessionFormProps } from './session-form.types';

export const SessionForm = (props: SessionFormProps) => {
  const { questions, count, level, topic } = props;

  console.log(questions);
  const [indexQuestion, setIndexQuestion] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[indexQuestion]);
  // const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);
  const [previousTopics, setPreviousTopics] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');

  const addAnswer = useSessionStore((state) => state.addAnswer);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async () => {
    addAnswer({ text: answer, questionId: currentQuestion.id });
    setAnswer('');
    setPreviousTopics((prev) => [...prev, currentQuestion.topic]);

    const newIndex = indexQuestion + 1;
    setIndexQuestion(newIndex);

    if (newIndex >= questions.length) {
      router.push('/setup/session/result');
    }
  };

  const currentQuestion = questions[indexQuestion];
  const numberQuestion = indexQuestion + 1;

  return (
    <div className="flex flex-col gap-8">
      <h1>
        Количество вопросов - {count}, текущий - {numberQuestion}
      </h1>

      <p>{currentQuestion.text}</p>

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

      <button onClick={handleSubmit} className="cursor-pointer bg-gray-900">
        {numberQuestion < count ? 'Submit' : 'Finish'}
      </button>
    </div>
  );
};
