import { QuestionList } from '@/entities/question/ui/question-list/question-list';

import Groq from 'groq-sdk';
import {
  buildEvaluationUserMessage,
  EVALUATION_SYSTEM_PROMPT,
  EvaluationInput,
} from '@/entities/answer/config/answer-promt';
import { Question } from '@/entities/question/api/get-question/get-question.types';

const { LLM_API_KEY, LLM_MODEL } = process.env;

const groq = new Groq({
  apiKey: LLM_API_KEY,
});

// interface EvaluationAnswerOptions extends EvaluationInput {}

export const evaluationAnswer = async (options: EvaluationInput) => {
  const { question, userAnswer, referenceAnswer } = options;

  try {
    const completion = await groq.chat.completions.create({
      model: LLM_MODEL,
      messages: [
        {
          role: 'system',
          content: EVALUATION_SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: buildEvaluationUserMessage({
            question,
            userAnswer,
            referenceAnswer,
          }),
        },
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

export default async function Page() {
  // const evaluationAnswerData = await evaluationAnswer({ question: { level: }})

  return (
    <div>
      <QuestionList />
    </div>
  );
}
