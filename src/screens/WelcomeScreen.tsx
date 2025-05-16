import { useDispatch } from "react-redux";
import patsilvarteLogoWide from "../assets/Patsilvarte_logo_horizontal.svg";
import { Q1, Q2, Q3 } from "../data/quiz";
import { startQuiz } from "../store/quizSlice";

const initialQuiz = [Q1, Q2, Q3];

export const WelcomeScreen = () => {
  const dispatch = useDispatch();

  const setQuestionSet = () => {
    dispatch(startQuiz(initialQuiz));
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
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <button onClick={setQuestionSet}>Convites de casamento</button>
      </div>
    </>
  );
};
