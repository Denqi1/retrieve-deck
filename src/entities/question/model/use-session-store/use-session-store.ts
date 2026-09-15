import { create } from 'zustand';
import { Actions, State } from './use-session-store.types';

export const useSessionStore = create<State & Actions>()((set) => ({
  // Потом зарефакторить, вряд ли нужно хранить вопросы и ответы прямо здесь
  answers: [],
  addAnswer: (answer) => {
    set((state) => {
      return { answers: [...state.answers, answer] };
    });
  },
}));
