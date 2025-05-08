import { useDispatch, useSelector } from "react-redux";
import patsilvarteLogoWide from "../assets/Patsilvarte_logo_horizontal.svg";
import { RootState } from "../store";
import { setQuestions } from "../store/quizSlice";

const initialQuestion1to5: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: "https://via.placeholder.com/150" },
    { imageUrl: "https://via.placeholder.com/150" },
    { imageUrl: "https://via.placeholder.com/150" },
  ],
};

export const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const index = useSelector((state: RootState) => state.quiz.currentIndex);
  const currentQuestion = questions[index];

  const setQuestionSet = () => {
    dispatch(setQuestions([initialQuestion1to5]));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={patsilvarteLogoWide}
          alt="Patsilvarte Weddings logo"
          style={{ width: "60vw" }}
        />
      </div>
      <button onClick={setQuestionSet}>Convites de casamento</button>
    </>
  );
};
