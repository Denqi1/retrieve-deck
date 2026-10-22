declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LLM_API_KEY: string;
      LLM_MODEL: string;
    }
  }
}

export {};
