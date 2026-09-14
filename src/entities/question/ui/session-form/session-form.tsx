'use client';

import { ChangeEvent, useState } from 'react';

import { Question } from '../../api/get-question/get-question.types';
import { getQuestion } from '../../api/get-question/get-question';
import { useSetupStore } from '@/features/setup-quiz-config/model/use-setup-store';
import { useRouter } from 'next/navigation';

export const SessionForm = ({ question }: { question: Question }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(
    question,
  );
  const [numberQuestion, setNumberQuestion] = useState(1);

  const answer = useSetupStore((state) => state.answer);
  const setAnswer = useSetupStore((state) => state.setAnswer);
  const addAnswer = useSetupStore((state) => state.addAnswer);
  const countQuestions = useSetupStore((state) => state.countCards);
  const addQuestion = useSetupStore((state) => state.addQuestion);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async () => {
    addAnswer({ text: answer, questionId: currentQuestion?.id ?? '' });
    setAnswer('');
    setCurrentQuestion(null);

    if (numberQuestion >= countQuestions) {
      // Не понимаю как добавить к текущему URL новый сегмент
      router.push('/result');

      return;
    }

    setNumberQuestion((prev) => prev + 1);

    const dataQuestion = await getQuestion({
      topic: 'javascript',
      level: 'junior',
      // Подумать над этим. Надо ли это. Поскольку сейчас я не понимаю как вообще это передать сюда.
      listPreviousQuestions: [],
    });

    if (!dataQuestion) {
      console.error('NO DATA QUESTION!');
      return;
    }

    addQuestion(dataQuestion);
    setCurrentQuestion(dataQuestion);
  };

  return (
    <div className="flex flex-col gap-8">
      <h1>
        Количество вопросов - {countQuestions}, текущий - {numberQuestion}
      </h1>

      {currentQuestion && currentQuestion.text ? (
        <p>{currentQuestion?.text}</p>
      ) : (
        <p>Loading...</p>
      )}

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
        disabled={!currentQuestion}
        onClick={handleSubmit}
        className="cursor-pointer bg-gray-900"
      >
        {numberQuestion < countQuestions ? 'Submit' : 'Finish'}
      </button>
    </div>
  );
};
