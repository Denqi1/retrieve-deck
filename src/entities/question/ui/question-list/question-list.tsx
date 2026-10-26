import { QuestionRow } from '../question-row/question-row';

const questions = [
  {
    number: 1,
    text: 'Зачем нужен generic в TypeScript?',
    themeTag: 'typescript',
  },
];

export const QuestionList = () => {
  return (
    <div className="flex flex-col gap-4">
      {questions.map((question) => {
        return (
          <QuestionRow
            key={question.number}
            number={question.number}
            text={question.text}
            themeTag={question.themeTag}
          />
        );
      })}
    </div>
  );
};
