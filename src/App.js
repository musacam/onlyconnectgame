/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Categories from "./Categories";
import MainScreen from "./MainScreen";
import QuestionScreen from "./QuestionScreen";
import Footer from "./Footer";
import { useState } from "react";
import { clues } from "./data";

function App() {
  const questions = Object.values(clues);
  const [questionChosen, setQuestionChosen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [nonChosenQuestions, setNonChosenQuestions] = useState(questions);
  const [points, setPoints] = useState(0);
  const [playersPointsArray, setPlayersPointsArray] = useState([0, 0, 0]);
  const [playerTurnArray, setPlayerTurnArray] = useState([false, false, false]);
  const [chosenOnes, setChosenOnes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [flagTurnOne, setFlagTurnOne] = useState(false);
  const [flagTurnTwo, setFlagTurnTwo] = useState(false);
  const [flagTurnThree, setFlagTurnThree] = useState(false);
  const [turnsResetted, setTurnsResetted] = useState(true);

  return (
    <div className="App">
      <MainScreen
        playersPointsArray={playersPointsArray}
        setPlayerTurnArray={setPlayerTurnArray}
        questionChosen={questionChosen}
        setFlagTurnOne={setFlagTurnOne}
        setFlagTurnTwo={setFlagTurnTwo}
        setFlagTurnThree={setFlagTurnThree}
        setTurnsResetted={setTurnsResetted}
        flagTurnOne={flagTurnOne}
        flagTurnTwo={flagTurnTwo}
        flagTurnThree={flagTurnThree}
        turnsResetted={turnsResetted}
      />
      {!questionChosen ? (
        <Categories
          setQuestionChosen={setQuestionChosen}
          setQuestion={setQuestion}
          nonChosenQuestions={nonChosenQuestions}
          setChosenOnes={setChosenOnes}
          chosenOnes={chosenOnes}
          turnsResetted={turnsResetted}
        />
      ) : (
        <QuestionScreen
          setQuestionChosen={setQuestionChosen}
          connectionQ={question}
          setPoints={setPoints}
          setPlayersPointsArray={setPlayersPointsArray}
          playerTurnArray={playerTurnArray}
          flagTurnOne={flagTurnOne}
          flagTurnTwo={flagTurnTwo}
          flagTurnThree={flagTurnThree}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
