/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import userImg from "./Images/user.png";
import { Button } from "antd";
import { useState } from "react";

function MainScreen({
  playersPointsArray,
  setPlayerTurnArray,
  questionChosen,
}) {
  const [flagTurnOne, setFlagTurnOne] = useState(false);
  const [flagTurnTwo, setFlagTurnTwo] = useState(false);
  const [flagTurnThree, setFlagTurnThree] = useState(false);
  const [turnsResetted, setTurnsResetted] = useState(true);

  const playerOneTurn = () => {
    setPlayerTurnArray([true, false, false]);
    setFlagTurnTwo(true);
    setFlagTurnThree(true);
    setTurnsResetted(false);
  };

  const playerTwoTurn = () => {
    setPlayerTurnArray([false, true, false]);
    setFlagTurnOne(true);
    setFlagTurnThree(true);
    setTurnsResetted(false);
  };

  const playerThreeTurn = () => {
    setPlayerTurnArray([false, false, true]);
    setFlagTurnOne(true);
    setFlagTurnTwo(true);
    setTurnsResetted(false);
  };

  const resetTurns = () => {
    setPlayerTurnArray([false, false, false]);
    setFlagTurnOne(false);
    setFlagTurnTwo(false);
    setFlagTurnThree(false);
    setTurnsResetted(true);
  };

  return (
    <>
      <div className="contestants">
        <div className="realContestants">
          <div className="contestant">
            <img src={userImg}></img>
            <div>
              <h3>Player 1</h3>
            </div>
            {questionChosen ? (
              <Button
                id="playerOne"
                onClick={playerOneTurn}
                style={{ height: 30, marginBottom: 10 }}
                disabled={flagTurnOne}
              >
                Me! Me! Me!
              </Button>
            ) : null}
            <span>{playersPointsArray[0]}</span>
          </div>
          <div className="contestant">
            <img src={userImg}></img>
            <div>
              <h3>Player 2</h3>
            </div>
            {questionChosen ? (
              <Button
                id="playerTwo"
                onClick={playerTwoTurn}
                style={{ height: 30, marginBottom: 10 }}
                disabled={flagTurnTwo}
              >
                Me! Me! Me!
              </Button>
            ) : null}
            <span>{playersPointsArray[1]}</span>
          </div>
          <div className="contestant">
            <img src={userImg}></img>
            <div>
              <h3>Player 3</h3>
            </div>
            {questionChosen ? (
              <Button
                id="playerThree"
                onClick={playerThreeTurn}
                style={{ height: 30, marginBottom: 10 }}
                disabled={flagTurnThree}
              >
                Me! Me! Me!
              </Button>
            ) : null}
            <span>{playersPointsArray[2]}</span>
          </div>
        </div>
        {!turnsResetted ? "You need to reset turns before next round!" : null}
        <div className="buttonReset">
          <Button
            type="primary"
            onClick={resetTurns}
            style={{ backgroundColor: "pink" }}
          >
            Reset Turns
          </Button>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
