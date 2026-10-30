export const questionSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    topic: {
      type: 'string',
    },
    type: {
      type: 'string',
      enum: [
        'theory',
        // 'code_analysis',
        // 'comparison',
        // 'architecture',
        // 'debugging',
      ],
    },
    text: {
      type: 'string',
    },
  },
  required: ['id', 'topic', 'type', 'text'],
};
