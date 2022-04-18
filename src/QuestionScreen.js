import React from "react";
import { Button } from "antd";
import TimerBar from "./TimerBar";
import { useEffect, useState } from "react";

function QuestionScreen({ setQuestionChosen, connectionQ }) {
  const [screenClueTwo, setScreenClueTwo] = useState("");
  const [screenClueThree, setScreenClueThree] = useState("");
  const [screenClueFour, setScreenClueFour] = useState("");

  const newQuestion = () => {
    setQuestionChosen(false);
  };

  const questionAnswer = () => {
    // TODO: Get remained clues and connection from connectionQ prop.
  };

  const stopTimerAndWaitAnswer = () => {
    // TODO: Stop timer and wait answer from the contestants.
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenClueTwo(connectionQ.clueTwo);
    }, 5000);
    setTimeout(() => {
      setScreenClueThree(connectionQ.clueThree);
    }, 10000);
    setTimeout(() => {
      setScreenClueFour(connectionQ.clueFour);
    }, 15000);
  });

  return (
    <>
      <div className="roundOne">
        <div className="timerBar">
          <TimerBar />
        </div>
        <div className="QuestionScreen">
          <div className="clue">
            <Button type="primary">{connectionQ.clueOne}</Button>
          </div>
          <div className="clue">
            <Button type="primary">{screenClueTwo}</Button>
          </div>
          <div className="clue">
            <Button type="primary">{screenClueThree}</Button>
          </div>
          <div className="clue">
            <Button type="primary">{screenClueFour}</Button>
          </div>
        </div>
        <div className="clueConnection">{connectionQ.connection}</div>
      </div>
      <div className="hostButtons">
        <Button
          type="primary"
          style={{ backgroundColor: "rgba(60, 164, 200, 0.612)" }}
          onClick={newQuestion}
        >
          New Question
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "rgb(255,190,0)" }}
          onClick={stopTimerAndWaitAnswer}
        >
          Stop
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "rgba(60, 164, 0, 0.612)" }}
          onClick={questionAnswer}
        >
          Successfully Answered
        </Button>
      </div>
    </>
  );
}

export default QuestionScreen;
