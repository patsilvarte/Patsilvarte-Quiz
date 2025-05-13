import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import patsilvarteLogoWideWhite from "../assets/Patsilvarte_logo_horizontal_white.svg";
import { QuestionAvsB } from "../questions/QuestionAvsB";
import { QuestionGNNG } from "../questions/QuestionGNNG";
import { RootState } from "../store";
import { nextQuestion, prevQuestion } from "../store/quizSlice";

export const QuestionScreen = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const index = useSelector((state: RootState) => state.quiz.currentIndex);
  const currentQuestion = questions[index];

  const isLastQuestion = index + 1 === questions.length;
  const isFirstQuestion = index === 0;

  const next = () => {
    dispatch(nextQuestion());
  };
  const previous = () => {
    dispatch(prevQuestion());
  };

  return (
    <>
      <div className="header">
        <img className="header-logo" src={patsilvarteLogoWideWhite} />
        {index + 1} / {questions.length}
      </div>
      <div className="question-box">
        {currentQuestion.format === "AvsB" && (
          <QuestionAvsB question={currentQuestion} />
        )}
        {currentQuestion.format === "GNNG" && (
          <QuestionGNNG question={currentQuestion} />
        )}
        {/* {currentQuestion.format === "1to5" && (
          <Question1to5 question={currentQuestion} />
        )} */}
      </div>
      <div className="footer">
        <button onClick={next}>
          {isLastQuestion ? "Submeter" : "Próximo"} <ArrowForwardIosIcon />
        </button>
        {!isFirstQuestion && (
          <button onClick={previous}>
            <ArrowBackIosIcon /> Anterior
          </button>
        )}
      </div>
    </>
  );
};
