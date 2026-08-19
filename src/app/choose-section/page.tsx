import { create } from 'zustand';
import { CountCards } from './components/count-cards/count-cards';
import { LevelCards } from './components/level-cards/level-cards';
import { SectionCardsList } from './components/section-cards-list/section-cards-list';

interface Section {
  name: string;
  color: string;
  id: number;
}

export type Level = 'junior' | 'middle' | 'senior';

interface State {
  sections: Section[];
  pickedSection: null | number;
  countCards: number;
  level: Level;
}

interface Actions {
  setSection: (sectionId: number) => void;
  setCountCards: (count: number) => void;
  setLevel: (level: Level) => void;
}

export const useSectionStore = create<State & Actions>()((set) => ({
  sections: [
    { name: 'javascript', color: 'text-yellow-400', id: 0 },
    { name: 'browser', color: 'text-purple-500', id: 1 },
    { name: 'security', color: 'text-red-500', id: 2 },
    { name: 'react', color: 'text-cyan-500', id: 3 },
    { name: 'next.js', color: 'text-gray-900', id: 4 },
    { name: 'typescript', color: 'text-blue-600', id: 5 },
    { name: 'html', color: 'text-orange-500', id: 6 },
    { name: 'css', color: 'text-pink-500', id: 7 },
    { name: 'network', color: 'text-emerald-500', id: 8 },
    { name: 'architecture', color: 'text-stone-600', id: 9 },
    { name: 'performance', color: 'text-amber-500', id: 10 },
  ],
  pickedSection: null,
  setSection: (sectionId: number) => {
    set(() => {
      return {
        pickedSection: sectionId,
      };
    });
  },
  countCards: 8,
  setCountCards: (count) => {
    set({ countCards: count });
  },
  level: 'junior',
  setLevel: (level) => {
    set({ level });
  },
}));

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl">
          Choose <span className="text-[#565b64]">{'\/\/'}</span> section
        </h1>
        <p className="text-[#8b909b]">
          Choose a theme, difficulty level, and number of cards, and the bundle
          will be put together automatically
        </p>
      </div>

      <div>
        <p className="text-xs text-[#565b64]">MODULES:</p>
        <SectionCardsList />
      </div>

      <div>
        <p className="text-xs text-[#565b64]">COUNT:</p>
        <CountCards />
      </div>

      <div>
        <p className="text-xs text-[#565b64]">LEVEL:</p>
        <LevelCards />
      </div>

      {/* Это нужно будет поместить в футер думаю, где будет показано что в итоге пользователь выбрал и рядышком кнопка run */}
      {/* Собственно кнопка run откроет "новую страницу" и там уже будет карточка-вопрос по теме */}
      <button>RUN</button>
    </div>
  );
}
