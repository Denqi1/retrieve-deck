import { create } from 'zustand';
import { Actions, State } from './useSetupStore.types';
import { LEVELS } from '../../config/level';
import { TOPICS } from '../../config/topic';
import { PRESET_COUNT_QUESTION_CARDS } from '../../config/count';

export const useSetupStore = create<State & Actions>()((set) => ({
  topics: TOPICS,
  pickedTopic: TOPICS[0].id,
  setTopic: (topicId: number) => {
    set(() => {
      return {
        pickedTopic: topicId,
      };
    });
  },
  countCards: PRESET_COUNT_QUESTION_CARDS[0],
  setCountCards: (count) => {
    set({ countCards: count });
  },
  level: LEVELS[0].name,
  setLevel: (level) => {
    set({ level });
  },
}));
