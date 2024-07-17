export type Lesson = {
  phrase: string;
};

export type AnswerFeedback = {
  rating: number;
  feedback: string;
  nextLessonId: number | null;
};