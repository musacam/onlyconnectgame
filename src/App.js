/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Categories from "./Categories";
import MainScreen from "./MainScreen";
import QuestionScreen from "./QuestionScreen";
import { useState } from "react";
import { clues } from "./data";

function App() {
  const [questionChosen, setQuestionChosen] = useState(false);
  const [question, setQuestion] = useState(null);
  const questions = Object.values(clues);
  const [nonChosenQuestions, setNonChosenQuestions] = useState(questions);

  return (
    <div className="App">
      <MainScreen />
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
        />
      )}
    </div>
  );
}

export default App;
