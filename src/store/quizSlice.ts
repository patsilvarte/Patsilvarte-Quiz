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
    setQuestions: (state, action: PayloadAction<Question[]>) => {
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
    // finishQuestion: (state) => {
    //   state.progress = ProgressState.Completed;
    // },
    goBackQuestion: (state) => {
      state.progress = ProgressState.OnGoing;
    },
    clearQuestions: (state) => {
      state.progress = ProgressState.NotStarted;
      state.currentIndex = 0;
      state.questions = [];
    },
  },
});

export const {
  setQuestions,
  answerQuestion,
  nextQuestion,
  prevQuestion,
  //finishQuestion,
  goBackQuestion,
  clearQuestions,
} = quizSlice.actions;
export default quizSlice.reducer;
