/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import userImg from "./Images/user.png";

function MainScreen() {
  return (
    <>
      <div className="contestants">
        <div className="contestant">
          <img src={userImg}></img>
          Player 1
        </div>
        <div className="contestant">
          <img src={userImg}></img>
          Captain
        </div>
        <div className="contestant">
          <img src={userImg}></img>
          Player 3
        </div>
      </div>
    </>
  );
}

export default MainScreen;
