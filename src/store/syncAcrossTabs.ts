import { ProgressState } from "../types";
import { store } from "./index";
import { setCurrentIndex, setProgress, setQuestions } from "./quizSlice";

window.addEventListener("storage", (event) => {
  if (event.key === "persist:patsilvarte-quiz") {
    try {
      console.log(event);
      const parsedNewValue = JSON.parse(event.newValue || "");
      const parsedOldValue = JSON.parse(event.oldValue || "");

      console.log(JSON.parse(parsedOldValue.currentIndex));
      console.log(JSON.parse(parsedNewValue.currentIndex));
      console.log(JSON.parse(parsedOldValue.progress));
      console.log(JSON.parse(parsedNewValue.progress));
      console.log(JSON.parse(parsedOldValue.questions));
      console.log(JSON.parse(parsedNewValue.questions));

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
    } catch (err) {
      console.warn("Sync error across tabs", err);
    }
  }
});
