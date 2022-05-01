/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import medusaImg from "./Images/medusa.png";
import griffinImg from "./Images/griffin.png";
import unicornImg from "./Images/unicorn.png";
import werewolfImg from "./Images/werewolf.png";
import cyclopsImg from "./Images/cyclops.png";
import santelmoImg from "./Images/santelmo.png";
import { Button } from "antd";

function Categories({
  setQuestionChosen,
  setQuestion,
  nonChosenQuestions,
  setChosenOnes,
  chosenOnes,
  turnsResetted,
}) {
  if (nonChosenQuestions.length === 0) {
    return (
      <div className="finitto">
        All THE QUESTIONS ANSWERED! Wait for me to add some more questions.
      </div>
    );
  }

  const chooseCategory = (e) => {
    // setChosenOnes([
    //   ...chosenOnes.slice(0, e.currentTarget.id),
    //   true,
    //   ...chosenOnes.slice(e.currentTarget.id + 1),
    // ]);
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
      {turnsResetted && (
        <div className="subcategory">
          <Button
            id="0"
            type="primary"
            disabled={chosenOnes[0]}
            onClick={chooseCategory}
          >
            <img src={medusaImg}></img>
          </Button>
          <Button
            id="1"
            type="primary"
            disabled={chosenOnes[1]}
            onClick={chooseCategory}
          >
            <img src={griffinImg}></img>
          </Button>
          <Button
            id="2"
            type="primary"
            disabled={chosenOnes[2]}
            onClick={chooseCategory}
          >
            <img src={unicornImg}></img>
          </Button>
          <Button
            id="3"
            type="primary"
            disabled={chosenOnes[3]}
            onClick={chooseCategory}
          >
            <img src={werewolfImg}></img>
          </Button>
          <Button
            id="4"
            type="primary"
            disabled={chosenOnes[4]}
            onClick={chooseCategory}
          >
            <img src={cyclopsImg}></img>
          </Button>
          <Button
            id="5"
            type="primary"
            disabled={chosenOnes[5]}
            onClick={chooseCategory}
          >
            <img src={santelmoImg}></img>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Categories;
