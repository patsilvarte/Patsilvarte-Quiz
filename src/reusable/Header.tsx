import { useSelector } from "react-redux";
import patsilvarteLogoWideWhite from "../assets/Patsilvarte_logo_horizontal_white.svg";
import { RootState } from "../store";
import { ProgressState } from "../types";

export const Header = () => {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const index = useSelector((state: RootState) => state.quiz.currentIndex);
  const progress = useSelector((state: RootState) => state.quiz.progress);

  return (
    <div className="header">
      <img className="header-logo" src={patsilvarteLogoWideWhite} />
      {progress === ProgressState.OnGoing &&
        `${index + 1} / ${questions.length}`}
    </div>
  );
};
