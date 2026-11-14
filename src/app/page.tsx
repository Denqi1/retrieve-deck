import { SessionSetupForm } from '@/features/session-setup';

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl">new / session</h1>
        <p className="text-xs text-secondary">
          Выбери темы, уровень и размер. Вопросы сгенерирует модель по одному
          запросу на каждый.
        </p>
      </div>

      <SessionSetupForm />
    </div>
  );
}
