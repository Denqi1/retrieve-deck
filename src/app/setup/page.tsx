import { SetupBlocks, SetupButton } from '@/features/setup-quiz-config';

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl">Setup</h1>
        {/* TODO: Вынести цвета в тему */}
        {/* @see DEV-69 */}
        <p className="text-[#8b909b]">
          Choose a topic, difficulty level, and number of cards, and the bundle
          will be put together automatically
        </p>
      </div>

      <SetupBlocks />

      {/* Это нужно будет поместить в футер думаю, где будет показано что в итоге пользователь выбрал и рядышком кнопка run */}
      {/* Собственно кнопка run откроет "новую страницу" и там уже будет карточка-вопрос по теме */}
      <SetupButton />
    </div>
  );
}
