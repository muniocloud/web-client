export type ConversationStatus = 'created' | 'started' | 'finished';

export type ConversationMessage = {
  id: number;
  message: string;
  isUser: boolean;
  audioUrl: string | null;
};

export type Conversation = {
  id: number;
  title: string;
  status: ConversationStatus;
  feedback: string | null;
  rating: number | null;
  messages?: ConversationMessage[];
};

export type ConversationFeedback = {
  feedback: string;
  rating: number;
}

export type CreateConversationResponse = {
  conversationId: number;
}