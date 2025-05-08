import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
  questions: Question[];
  currentIndex: number;
}

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.currentIndex = 0;
    },
    answerQuestion: (state, action: PayloadAction<{ updated: Question }>) => {
      state.questions[state.currentIndex] = action.payload.updated;
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
  },
});

export const { setQuestions, answerQuestion, nextQuestion, prevQuestion } =
  quizSlice.actions;
export default quizSlice.reducer;
