import { Button } from '@/shared/ui/button';
import { SectionTitle } from '@/shared/ui/section-title';
import { Card } from '@/shared/ui/card';

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

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <SectionTitle number={1} title="topics" />

          <div className="flex gap-3 text-xs items-center">
            <Button size="xs" variant="text" text="all" />
            <Button size="xs" variant="text" text="clear" />
            <p>0 / 3</p>
          </div>
        </div>

        <ul className="grid grid-cols-4">
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            <p>JS</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            <p>React</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            <p>TS</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-xs text-green-400">02 · level</p>
        </div>

        <div className="flex gap-2">
          <Card description="Базовые понятия" title="junior" />
          <Card description="Объяснение почему" title="middle" />
        </div>
      </div>

      <Button size="lg" text="Start session" className="self-start" />
    </div>
  );
}
