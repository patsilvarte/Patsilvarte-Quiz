import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { RootState } from "./store";
import { setQuestions } from "./store/quizSlice";
import viteLogo from "/vite.svg";

const initialQuestion1to5: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: "https://via.placeholder.com/150" },
    { imageUrl: "https://via.placeholder.com/150" },
    { imageUrl: "https://via.placeholder.com/150" },
  ],
};

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const index = useSelector((state: RootState) => state.quiz.currentIndex);
  const currentQuestion = questions[index];

  const setQuestionSet = () => {
    dispatch(setQuestions([initialQuestion1to5]));
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={setQuestionSet}>set questions</button>
        <p>{questions.length} Questions saved</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
