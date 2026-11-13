import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Chip } from '@/shared/ui/chip';
import { SectionTitle } from '@/shared/ui/section-title';

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

        <ul className="grid grid-cols-4 gap-4">
          <li>
            <Chip text="JS" isChecked />
          </li>
          <li>
            <Chip text="React" isChecked={false} />
          </li>
          <li>
            <Chip text="TS" isChecked={false} />
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle number={2} title="level" />

        <div className="flex gap-2">
          <Card
            description="Базовые понятия, определения, «что это и зачем»"
            title="junior"
            className="max-w-40"
          />
          <Card
            description="Как работает под капотом, типичные кейсы и ошибки"
            title="middle"
            className="max-w-40"
          />
          <Card
            description="Trade-offs, архитектура, edge cases, «почему так»"
            title="senior"
            className="max-w-40"
          />
        </div>
      </div>

      <Button size="lg" text="Start session" className="self-start" />
    </div>
  );
}
