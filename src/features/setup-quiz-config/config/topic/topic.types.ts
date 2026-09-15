export type TopicName =
  | 'javascript'
  | 'browser'
  | 'security'
  | 'react'
  | 'next.js'
  | 'typescript'
  | 'html'
  | 'css'
  | 'network'
  | 'architecture'
  | 'performance';

export interface Topic {
  name: TopicName;
  id: number;
}
