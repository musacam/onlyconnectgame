/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import medusaImg from "./Images/medusa.png";
import griffinImg from "./Images/griffin.png";
import unicornImg from "./Images/unicorn.png";
import werewolfImg from "./Images/werewolf.png";
import cyclopsImg from "./Images/cyclops.png";
import santelmoImg from "./Images/santelmo.png";
import { Button } from "antd";

function Categories({ setQuestionChosen, setQuestion, nonChosenQuestions }) {
  if (nonChosenQuestions.length === 0) {
    return (
      <div className="finitto">
        All THE QUESTIONS ANSWERED! It is time for round 2.
      </div>
    );
  }

  const chooseCategory = () => {
    const randomQuestion =
      nonChosenQuestions[Math.floor(Math.random() * nonChosenQuestions.length)];
    const index = nonChosenQuestions.indexOf(randomQuestion);
    nonChosenQuestions.splice(index, 1);
    setQuestion(randomQuestion);
    setTimeout(() => {
      setQuestionChosen(true);
    }, 500);
  };
  return (
    <div className="categories">
      <div className="subcategory">
        <Button id="1" type="primary" onClick={chooseCategory}>
          <img src={medusaImg}></img>
        </Button>
        <Button id="2" type="primary" onClick={chooseCategory}>
          <img src={griffinImg}></img>
        </Button>
        <Button id="3" type="primary" onClick={chooseCategory}>
          <img src={unicornImg}></img>
        </Button>
        <Button id="4" type="primary" onClick={chooseCategory}>
          <img src={werewolfImg}></img>
        </Button>
        <Button id="5" type="primary" onClick={chooseCategory}>
          <img src={cyclopsImg}></img>
        </Button>
        <Button id="6" type="primary" onClick={chooseCategory}>
          <img src={santelmoImg}></img>
        </Button>
      </div>
    </div>
  );
}

export default Categories;
