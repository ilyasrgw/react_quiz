import { useQuiz } from "../contexts/QuizContext";

function Main({ children }) {
  const { status } = useQuiz();
  return <main className="main">{children}</main>;
}

export default Main;
