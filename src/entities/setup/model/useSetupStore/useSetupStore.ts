import { create } from 'zustand';
import { Actions, State } from './useSetupStore.types';

export const useSetupStore = create<State & Actions>()((set) => ({
  topics: [
    { name: 'javascript', id: 0 },
    { name: 'browser', id: 1 },
    { name: 'security', id: 2 },
    { name: 'react', id: 3 },
    { name: 'next.js', id: 4 },
    { name: 'typescript', id: 5 },
    { name: 'html', id: 6 },
    { name: 'css', id: 7 },
    { name: 'network', id: 8 },
    { name: 'architecture', id: 9 },
    { name: 'performance', id: 10 },
  ],
  pickedTopic: 0,
  setTopic: (topicId: number) => {
    set(() => {
      return {
        pickedTopic: topicId,
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
