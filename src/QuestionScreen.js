import React from "react";
import { Button } from "antd";
import TimerBar from "./TimerBar";

function QuestionScreen({ setQuestionChosen }) {
  const questionAnswer = () => {
    setQuestionChosen(false);
  };

  return (
    <>
      <div className="timerBar">
        <TimerBar />
      </div>
      <div className="QuestionScreen">
        <div className="clue">
          <Button type="primary">Clue 1</Button>
        </div>
        <div className="clue">
          <Button type="primary">Clue 1</Button>
        </div>
        <div className="clue">
          <Button type="primary">Clue 1</Button>
        </div>
        <div className="clue">
          <Button type="primary">Clue 1</Button>
        </div>
      </div>
      <div className="newQuestion">
        <Button type="primary" onClick={questionAnswer}>
          New Question
        </Button>
      </div>
    </>
  );
}

export default QuestionScreen;
