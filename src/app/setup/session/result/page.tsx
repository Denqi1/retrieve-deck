import { QuestionRow } from '@/entities/question/ui/question-row/question-row';

const questions = [
  {
    number: 1,
    text: 'Зачем нужен generic в TypeScript?',
    themeTag: 'typescript',
  },
];

export default function Page() {
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
}
