import { CountCards } from './components/count-cards/count-cards';
import { LevelCards } from './components/level-cards/level-cards';
import { SectionCardsList } from './components/section-cards-list/section-cards-list';

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl">
        Choose <span className="text-gray-500">{'\/\/'}</span> section
      </h1>
      <p className="text-gray-400">
        Choose a theme, difficulty level, and number of cards, and the bundle
        will be put together automatically
      </p>

      <p>MODULES:</p>
      <SectionCardsList />

      <p>COUNT:</p>
      <CountCards />

      <p>LEVEL:</p>
      <LevelCards />
    </div>
  );
}
