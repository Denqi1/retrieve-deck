interface Topic {
  name: string;
  id: number;
}

export type Level = 'junior' | 'middle' | 'senior';

export interface State {
  topics: Topic[];
  pickedTopic: null | number;
  countCards: number;
  level: Level;
}

export interface Actions {
  setTopic: (topicId: number) => void;
  setCountCards: (count: number) => void;
  setLevel: (level: Level) => void;
}
