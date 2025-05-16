import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProgressState, Question } from "../types";

interface QuizState {
  questions: Question[];
  currentIndex: number;
  progress: ProgressState;
}

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
  progress: ProgressState.NotStarted,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.currentIndex = 0;
      state.progress = ProgressState.OnGoing;
    },
    answerQuestion: (state, action: PayloadAction<{ updated: Question }>) => {
      state.questions[state.currentIndex] = action.payload.updated;
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      } else {
        state.progress = ProgressState.Completed;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    goBackQuestion: (state) => {
      state.progress = ProgressState.OnGoing;
    },
    clearQuestions: (state) => {
      state.progress = ProgressState.NotStarted;
      state.currentIndex = 0;
      state.questions = [];
    },
    // for sync between tabs - syncAcrossTabs.ts
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setProgress: (state, action: PayloadAction<ProgressState>) => {
      state.progress = action.payload;
    },
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
  },
});

export const {
  startQuiz,
  answerQuestion,
  nextQuestion,
  prevQuestion,
  goBackQuestion,
  clearQuestions,
  setCurrentIndex,
  setProgress,
  setQuestions,
} = quizSlice.actions;
export default quizSlice.reducer;
