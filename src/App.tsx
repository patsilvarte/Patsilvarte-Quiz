import { useSelector } from "react-redux";
import "./App.css";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { RootState } from "./store";

function App() {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const index = useSelector((state: RootState) => state.quiz.currentIndex);
  const currentQuestion = questions[index];

  console.log(index);
  console.log(questions.length);
  if (index === 0 && questions.length === 0) {
    return <WelcomeScreen />;
  }

  return <></>;
}

export default App;
