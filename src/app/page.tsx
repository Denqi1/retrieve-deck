import Link from 'next/link';
import { lusitana } from '@/old/ui/fonts/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl">new / session</h1>
        <p className="text-xs">
          Выбери темы, уровень и размер. Вопросы сгенерирует модель по одному
          запросу на каждый.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-xs text-green-400">01 · topics</p>

          <div className="flex gap-3 text-xs items-center">
            <button className="cursor-pointer p-2">all</button>
            <button className="cursor-pointer p-2">clear</button>
            <p className="text-green-200">0 / 3</p>
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
          <div className="flex flex-col gap-4 bg-gray-950 p-4 rounded-xl cursor-pointer">
            <div className="flex justify-between">
              <p className="text-sm text-green-800">junior</p>
              <div>
                <span>+</span>
                <span>-</span>
                <span>-</span>
              </div>
            </div>

            <p className="text-xs">Базовые понятия</p>
          </div>

          <div className="flex flex-col gap-4 bg-gray-950 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className="text-sm text-green-800">middle</p>
              <div>
                <span>+</span>
                <span>+</span>
                <span>-</span>
              </div>
            </div>

            <p className="text-xs">Объяснение почему</p>
          </div>
        </div>
      </div>
    </div>
  );
}
