import { create } from 'zustand';
import { Actions, State } from './use-setup-store.types';
import { LEVELS } from '../../config/level';
import { TOPICS } from '../../config/topic';
import { PRESET_COUNT_QUESTION_CARDS } from '../../config/count';
import { Question } from '@/entities/question/api/get-question/get-question.types';

export const useSetupStore = create<State & Actions>()((set) => ({
  topic: TOPICS[0],
  setTopic: (topic) => {
    const { id, name } = topic;

    set({
      topic: {
        id,
        name,
      },
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

  questions: [],
  addQuestion: (question) => {
    set((state) => {
      return { questions: [...state.questions, question] };
    });
  },

  // Потом зарефакторить, вряд ли нужно хранить пагинацию именно здесь
  currentQuestion: null,
  setNextQuestion: (question: Question) => {
    set((state) => {
      return {
        currentQuestion: {
          ...question,
          number: (state.currentQuestion?.number || 0) + 1,
        },
      };
    });
  },

  // Потом зарефакторить, вряд ли нужно хранить вопросы и ответы прямо здесь
  answers: [],
  addAnswer: (answer) => {
    set((state) => {
      return { answers: [...state.answers, answer] };
    });
  },
  answer: '',
  setAnswer: (value) => {
    set({ answer: value });
  },
}));
