import { ProgressState } from "../types";
import { store } from "./index";
import {
  saveUserInfo,
  setCurrentIndex,
  setProgress,
  setQuestions,
} from "./quizSlice";

window.addEventListener("storage", (event) => {
  if (event.key === "persist:patsilvarte-quiz") {
    try {
      const parsedNewValue = JSON.parse(event.newValue || "");
      const parsedOldValue = JSON.parse(event.oldValue || "");

      if (parsedNewValue.currentIndex !== parsedOldValue.currentIndex) {
        console.log("different index");
        const newIndex = JSON.parse(parsedNewValue.currentIndex);
        store.dispatch(setCurrentIndex(newIndex));
      }

      if (parsedNewValue.progress !== parsedOldValue.progress) {
        console.log("different progress");
        const newProgress = JSON.parse(parsedNewValue.progress);
        store.dispatch(setProgress(newProgress as ProgressState));
      }

      if (parsedNewValue.questions !== parsedOldValue.questions) {
        console.log("different questions");
        const newQuestions = JSON.parse(parsedNewValue.questions);
        store.dispatch(setQuestions(newQuestions));
      }
      if (parsedNewValue.userInfo !== parsedOldValue.userInfo) {
        console.log("different userInfo");
        const newUserInfo = JSON.parse(parsedNewValue.userInfo);
        store.dispatch(saveUserInfo(newUserInfo));
      }
    } catch (err) {
      console.warn("Sync error across tabs", err);
    }
  }
});
