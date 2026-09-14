import { getQuestion } from '@/entities/question/api/get-question/get-question';
import { SessionForm } from '@/entities/question/ui/session-form/session-form';

export default async function Page() {
  const dataQuestion = await getQuestion({
    topic: 'javascript',
    level: 'junior',
    // Подумать над этим. Надо ли это. Поскольку сейчас я не понимаю как вообще это передать сюда.
    listPreviousQuestions: [],
  });

  if (!dataQuestion) {
    return <div>Undefined</div>;
  }

  return (
    <div>
      <SessionForm question={dataQuestion} />
    </div>
  );
}
