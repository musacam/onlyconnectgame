/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Categories from "./Categories";
import MainScreen from "./MainScreen";
import QuestionScreen from "./QuestionScreen";
import { useState } from "react";

function App() {
  const [questionChosen, setQuestionChosen] = useState(false);

  console.log(questionChosen);

  return (
    <div className="App">
      <MainScreen />
      {!questionChosen ? (
        <Categories setQuestionChosen={setQuestionChosen} />
      ) : (
        <QuestionScreen setQuestionChosen={setQuestionChosen} />
      )}
    </div>
  );
}

export default App;
