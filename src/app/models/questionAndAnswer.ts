export interface QuestionAndAnswer {
  clientName: string;
  projectName: string;
  questionAndAnswer: [
    {
      agentFullName: string;
      agentId: number;
      agentUsername: string;
      answer: string;
      question: string;
      questionId: number;
      questionType: string
    }
  ],
  surveyDescription: string;
}
