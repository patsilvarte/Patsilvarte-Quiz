import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Question1to5 } from "../questions/Question1to5";
import { QuestionAvsB } from "../questions/QuestionAvsB";
import { QuestionGNNG } from "../questions/QuestionGNNG";
import { Header } from "../reusable/Header";
import { RootState } from "../store";
import { clearQuestions, nextQuestion, prevQuestion } from "../store/quizSlice";

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
  const clear = () => {
    dispatch(clearQuestions());
  };

  return (
    <>
      <Header />
      <div className="question-box">
        {currentQuestion.format === "AvsB" && (
          <QuestionAvsB question={currentQuestion} />
        )}
        {currentQuestion.format === "GNNG" && (
          <QuestionGNNG question={currentQuestion} />
        )}
        {currentQuestion.format === "1to5" && (
          <Question1to5 question={currentQuestion} />
        )}
      </div>
      <Grid container className="footer">
        <Grid size={4}>
          {!isFirstQuestion && (
            <button onClick={previous} className="link">
              <ArrowBackIosIcon /> Anterior
            </button>
          )}
        </Grid>
        <Grid size={4} className="footer-element-center">
          <button onClick={clear} className="link" style={{ fontSize: "16px" }}>
            Voltar ao início
          </button>
        </Grid>
        <Grid size={4} className="footer-element-right">
          <button onClick={next} className="link">
            {isLastQuestion ? "Completar" : "Próximo"} <ArrowForwardIosIcon />
          </button>
        </Grid>
      </Grid>
    </>
  );
};
