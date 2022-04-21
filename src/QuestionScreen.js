/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import { useState } from "react";

function QuestionScreen({ setQuestionChosen, connectionQ }) {
  const [clueConnection, setClueConnection] = useState("");
  const [timeByPoints, setTimeByPoints] = useState(5);
  const [element, setElement] = useState(1);
  const timer = useRef(null);
  const widthAnimationBox = useRef(null);

  const newQuestion = () => {
    setQuestionChosen(false);
  };

  const stopAnswer = () => {
    clearInterval(timer.current);
    clearInterval(widthAnimationBox.current);
    document.getElementsByClassName("timerBar")[0].style.transition = "none";
    document.getElementsByClassName("timerBar")[0].style.width = "100px";
  };

  const questionAnswer = () => {
    setClueConnection(connectionQ.connection);
    document
      .getElementsByClassName("clue")[1]
      .getElementsByTagName("button")[0]
      .getElementsByTagName("span")[0].style.display = "inline";
    document
      .getElementsByClassName("clue")[2]
      .getElementsByTagName("button")[0]
      .getElementsByTagName("span")[0].style.display = "inline";
    document
      .getElementsByClassName("clue")[3]
      .getElementsByTagName("button")[0]
      .getElementsByTagName("span")[0].style.display = "inline";
    document.getElementsByClassName("timerBar")[0].style.display = "none";
  };

  useEffect(() => {
    widthAnimationBox.current = setTimeout(() => {
      document.getElementsByClassName("timerBar")[0].style.width = "0px";
    });
    return () => {
      clearInterval(widthAnimationBox.current);
    };
  }, []);

  useEffect(() => {
    let myTime = (timer.current = setTimeout(() => {
      setTimeByPoints(timeByPoints - 1);
      setElement(element + 1);
      document
        .getElementsByClassName("clue")
        [element].getElementsByTagName("button")[0]
        .getElementsByTagName("span")[0].style.display = "inline";
    }, 5000));
    if (timeByPoints === 1) {
      clearInterval(myTime);
      setElement(1);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [element, timeByPoints]);

  return (
    <>
      <div className="roundOne">
        <div className="timerBar">
          <div className="pointInfo">
            {timeByPoints}
            {timeByPoints > 1 ? " points" : " point"}
          </div>
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
        <Button
          type="primary"
          style={{ backgroundColor: "rgba(255,99,71, 0.612)" }}
          onClick={stopAnswer}
        >
          Stop
        </Button>
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
