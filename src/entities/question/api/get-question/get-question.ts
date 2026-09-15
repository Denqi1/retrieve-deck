import { GENERATION_QUESTION_SYSTEM_PROMPT } from '../../config/question-prompt';
import { questionSchema } from '../../model/question-schema';
import { GetQuestionOptions, Question } from './get-question.types';

const fetchQuestion = async () => {
  //
};

export const getQuestion = async (options: GetQuestionOptions) => {
  const { level, topic, listPreviousTopics } = options;

  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      cache: 'no-store',

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'qwen3.5:9b',
        stream: false,
        think: false,
        messages: [
          {
            role: 'system',
            content: GENERATION_QUESTION_SYSTEM_PROMPT,
          },
          {
            role: 'system',
            content: `listPreviousTopics: ${JSON.stringify(listPreviousTopics)}`,
          },
          {
            role: 'user',
            content: `topic: ${topic}\nlevel: ${level}\n`,
          },
        ],
        format: questionSchema,
        options: {
          num_ctx: 16384, // явно расширяем контекст, дефолтные 4096 маловаты для твоего промпта
          num_predict: 4096, // страховка на случай, если что-то пойдёт не так — явный потолок на ответ
        },
      }),
    });

    const data = await res.json();

    const dataParsed: Question = JSON.parse(data.message.content);

    return dataParsed;
  } catch (error) {
    console.error(error);
  }
};

export const preloadQuestion = (options: GetQuestionOptions) => {
  void getQuestion(options);
};
