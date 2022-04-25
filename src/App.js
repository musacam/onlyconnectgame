/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Categories from "./Categories";
import MainScreen from "./MainScreen";
import QuestionScreen from "./QuestionScreen";
import Points from "./Points";
import { useState } from "react";
import { clues } from "./data";

function App() {
  const questions = Object.values(clues);
  const [questionChosen, setQuestionChosen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [nonChosenQuestions, setNonChosenQuestions] = useState(questions);
  const [points, setPoints] = useState(0);

  return (
    <div className="App">
      <MainScreen />
      <Points points={points} />
      {!questionChosen ? (
        <Categories
          setQuestionChosen={setQuestionChosen}
          setQuestion={setQuestion}
          nonChosenQuestions={nonChosenQuestions}
        />
      ) : (
        <QuestionScreen
          setQuestionChosen={setQuestionChosen}
          connectionQ={question}
          setPoints={setPoints}
        />
      )}
    </div>
  );
}

export default App;
