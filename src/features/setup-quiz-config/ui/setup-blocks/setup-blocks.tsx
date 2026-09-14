import { CountCards } from '../count-cards';
import { LevelCards } from '../level-cards';
import { TopicCards } from '../topic-cards';

export const SetupBlocks = () => {
  return (
    <div>
      <div>
        <p className="text-xs text-[#565b64]">TOPICS:</p>
        <TopicCards />
      </div>

      <div>
        <p className="text-xs text-[#565b64]">COUNT:</p>
        <CountCards />
      </div>

      <div>
        <p className="text-xs text-[#565b64]">LEVEL:</p>
        <LevelCards />
      </div>
    </div>
  );
};
