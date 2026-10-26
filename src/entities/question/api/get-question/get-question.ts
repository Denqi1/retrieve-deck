import Groq from 'groq-sdk';
import { GetQuestionOptions, Question } from './get-question.types';
import { buildGenerationPrompt } from '../../config/question-prompt';

const { LLM_API_KEY, LLM_MODEL } = process.env;

const groq = new Groq({
  apiKey: LLM_API_KEY,
});

export const getQuestions = async (options: GetQuestionOptions) => {
  const { level, topic, previousTopics, count } = options;

  try {
    const completion = await groq.chat.completions.create({
      model: LLM_MODEL,
      messages: [
        {
          role: 'system',
          content: buildGenerationPrompt({
            count,
            level,
            previousTopics,
            topic,
          }),
        },
        { role: 'user', content: `Сгенерируй вопросы.` },
      ],
      response_format: { type: 'json_object' },
      reasoning_effort: 'medium',
    });

    const text = completion.choices[0].message.content;
    if (!text) return undefined;

    const dataParsed: Question[] = JSON.parse(text);
    return dataParsed;
  } catch (error) {
    if (error instanceof Groq.APIError) {
      console.error(error.status, error.message);
    } else {
      console.error(error);
    }
  }
};
