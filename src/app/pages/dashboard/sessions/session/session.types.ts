export type Session = {
  id: number;
  title: string;
  status: number;
  context: string;
  lessons: number;
  level: number;
  feedback: string | null;
  rating: number | null;
  lessonsItens: Lesson[];
};

export type SessionFeedback = {
  feedback: string | null;
  rating: number | null;
};

export type Lesson = {
  id: number;
  phrase: string;
  answered: boolean;
};
