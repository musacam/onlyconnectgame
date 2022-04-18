/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import medusaImg from "./Images/medusa.png";
import griffinImg from "./Images/griffin.png";
import unicornImg from "./Images/unicorn.png";
import werewolfImg from "./Images/werewolf.png";
import cyclopsImg from "./Images/cyclops.png";
import santelmoImg from "./Images/santelmo.png";
import { Button } from "antd";
import { clues } from "./data";

function Categories({ setQuestionChosen, setQuestion }) {
  const questions = Object.values(clues);

  const chooseCategory = () => {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    console.log(randomQuestion);
    setQuestion(randomQuestion);
    setTimeout(() => {
      setQuestionChosen(true);
    }, 500);
  };
  return (
    <div className="categories">
      <div className="subcategory">
        <Button type="primary" onClick={chooseCategory}>
          <img src={medusaImg}></img>
        </Button>
        <Button type="primary" onClick={chooseCategory}>
          <img src={griffinImg}></img>
        </Button>
        <Button type="primary" onClick={chooseCategory}>
          <img src={unicornImg}></img>
        </Button>
        <Button type="primary" onClick={chooseCategory}>
          <img src={werewolfImg}></img>
        </Button>
        <Button type="primary" onClick={chooseCategory}>
          <img src={cyclopsImg}></img>
        </Button>
        <Button type="primary" onClick={chooseCategory}>
          <img src={santelmoImg}></img>
        </Button>
      </div>
    </div>
  );
}

export default Categories;
