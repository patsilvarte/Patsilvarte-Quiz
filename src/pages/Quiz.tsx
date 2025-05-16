import { useSelector } from "react-redux";
import { CompleteScreen } from "../screens/CompleteScreen";
import { QuestionScreen } from "../screens/QuestionScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { RootState } from "../store";
import { ProgressState } from "../types";

export const Quiz = () => {
  const progress = useSelector((state: RootState) => state.quiz.progress);

  if (progress === ProgressState.NotStarted) {
    return <WelcomeScreen />;
  }
  if (progress === ProgressState.OnGoing) {
    return <QuestionScreen />;
  }
  if (progress === ProgressState.Completed) {
    return <CompleteScreen />;
  }

  return <></>;
};
