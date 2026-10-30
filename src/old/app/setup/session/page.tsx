import { SessionForm } from '@/old/entities/question/ui/session-form/session-form';
import { nanoid } from 'nanoid';
import { SessionPageProps } from './page.types';

const dataQuestionsMock = {
  questions: [
    {
      topic: 'Array.prototype.reduce: начальное значение аккумулятора',
      type: 'theory',
      text: 'Что происходит, если не передать начальное значение аккумулятора в метод Array.prototype.reduce?',
      additionalQuestions: [
        'Какой будет результат вызова reduce на пустом массиве без начального значения?',
      ],
    },
    {
      topic: 'Promise.prototype.finally: выполнение при отклонении',
      type: 'theory',
      text: 'Выполняется ли колбэк, переданный в Promise.prototype.finally, когда промис отклоняется?',
      additionalQuestions: [],
    },
    {
      topic: 'Event loop: порядок микротасков и макротасков',
      type: 'code_analysis',
      text: "Какой порядок вывода в консоль будет у следующего кода?\n```javascript\nconsole.log('start');\nsetTimeout(() => console.log('macrotask'), 0);\nPromise.resolve().then(() => console.log('microtask 1'));\nPromise.resolve().then(() => console.log('microtask 2'));\nconsole.log('end');\n```",
      additionalQuestions: [],
    },
    {
      topic: 'Optional chaining vs logical AND: проверка вложенного свойства',
      type: 'comparison',
      text: 'В чём различие поведения Optional chaining (?.) и логического И (&&) при попытке доступа к неопределённому вложенному свойству?',
      additionalQuestions: [],
    },
    {
      topic: 'Object.freeze: изменение вложенных объектов',
      type: 'debugging',
      text: 'Почему после выполнения Object.freeze(obj) свойства вложенного объекта всё ещё можно изменить?',
      additionalQuestions: [
        'Как можно полностью сделать объект неизменяемым, включая вложения?',
      ],
    },
    {
      topic:
        'Destructuring assignment: значения по умолчанию в вложенных объектах',
      type: 'code_analysis',
      text: 'Что будет выведено в результате выполнения следующего кода?\n```javascript\nconst config = { api: { timeout: undefined } };\nconst { api: { timeout = 5000 } } = config;\nconsole.log(timeout);\n```',
      additionalQuestions: [],
    },
    {
      topic: 'Function.prototype.bind: частичное применение аргументов',
      type: 'debugging',
      text: 'Какие аргументы получит оригинальная функция, если её обёртка, созданная через Function.prototype.bind, вызывается без аргументов?',
      additionalQuestions: [],
    },
    {
      topic: 'Map: сравнение NaN ключей',
      type: 'theory',
      text: 'Как Map рассматривает NaN в качестве ключа: считается ли NaN тем же самым ключом при разных вставках?',
      additionalQuestions: [],
    },
  ],
};

const questions = dataQuestionsMock.questions.map((question) => {
  return {
    ...question,
    id: nanoid(8),
  };
});

export default async function Page(props: SessionPageProps) {
  const { searchParams } = props;

  const { count, level, topic } = await searchParams;

  if (!level || !topic || !count) {
    console.error('no topic or level or count');

    return <div>ERROR!</div>;
  }

  /**
   * TODO: Когда будет готова страница Result - убрать мок-данные.
   */
  // const questions = await getQuestions({
  //   topic,
  //   level,
  //   previousTopics: [],
  //   count,
  // });

  if (!questions) {
    return <div>Undefined</div>;
  }

  return (
    <div>
      <SessionForm
        questions={questions}
        count={count}
        level={level}
        topic={topic}
      />
    </div>
  );
}
