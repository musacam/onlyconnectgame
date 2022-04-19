import React from "react";
import { Button, Statistic } from "antd";
import TimerBar from "./TimerBar";
import { useState } from "react";
const { Countdown } = Statistic;

function QuestionScreen({ setQuestionChosen, connectionQ }) {
  const deadline = Date.now() + 25000; // Moment is also OK
  const [clueConnection, setClueConnection] = useState("");

  const newQuestion = () => {
    setQuestionChosen(false);
  };

  const questionAnswer = () => {
    setClueConnection(connectionQ.connection);
    document.getElementsByClassName("timerBar")[0].style.display = "none";
  };

  // let myTimer = setInterval(() => {
  //   nextCluePlease();
  // }, 5000);

  // const nextCluePlease = () => {
  //   // TODO: Get next clue from the server.
  //   setTimeout(1000);
  //   if (clueNumber === 1 && isRunning) {
  //     setScreenClue2(connectionQ.clue2);
  //     setClueNumber(clueNumber + 1);
  //   } else if (clueNumber === 2 && isRunning) {
  //     setScreenClue3(connectionQ.clue3);
  //     setClueNumber(clueNumber + 1);
  //   } else if (clueNumber === 3 && isRunning) {
  //     setScreenClue4(connectionQ.clue4);
  //     setClueNumber(clueNumber + 1);
  //   }
  // };

  return (
    <>
      <div className="roundOne">
        <div className="timerBar">
          <Countdown value={deadline} format={"ss"} />
          {/* <TimerBar /> */}
        </div>
        <div className="QuestionScreen">
          <div className="clue">
            <Button type="primary">{connectionQ.clue1}</Button>
          </div>
          <div className="clue">
            <Button type="primary">{connectionQ.clue2}</Button>
          </div>
          <div className="clue">
            <Button type="primary">{connectionQ.clue3}</Button>
          </div>
          <div className="clue">
            <Button type="primary">{connectionQ.clue4}</Button>
          </div>
        </div>
        <div className="clueConnection">{clueConnection}</div>
      </div>
      <div className="hostButtons">
        <Button
          type="primary"
          style={{ backgroundColor: "rgba(60, 164, 200, 0.612)" }}
          onClick={newQuestion}
        >
          New Question
        </Button>
        {/* <Button
          type="primary"
          style={{ backgroundColor: "rgba(60, 164, 200, 0.612)" }}
          onClick={nextCluePlease}
        >
          Next Clue Please
        </Button> */}
        <Button
          type="primary"
          style={{ backgroundColor: "rgba(60, 164, 0, 0.612)" }}
          onClick={questionAnswer}
        >
          Answer!
        </Button>
      </div>
    </>
  );
}

export default QuestionScreen;
