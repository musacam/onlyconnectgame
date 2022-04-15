/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import medusaImg from "./Images/medusa.png";
import griffinImg from "./Images/griffin.png";
import unicornImg from "./Images/unicorn.png";
import werewolfImg from "./Images/werewolf.png";
import cyclopsImg from "./Images/cyclops.png";
import santelmoImg from "./Images/santelmo.png";
import userImg from "./Images/user.png";
import { Button } from "antd";

const chooseCategory = () => {};

function App() {
  return (
    <div className="App">
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
      <div className="categories">
        <div className="subcategory">
          <Button type="primary" src={medusaImg} onClick={chooseCategory}>
            <img src={medusaImg}></img>
          </Button>
          <Button type="primary" src={medusaImg}>
            <img src={griffinImg}></img>
          </Button>
          <Button type="primary" src={medusaImg}>
            <img src={unicornImg}></img>
          </Button>
          <Button type="primary" src={medusaImg}>
            <img src={werewolfImg}></img>
          </Button>
          <Button type="primary" src={medusaImg}>
            <img src={cyclopsImg}></img>
          </Button>
          <Button type="primary" src={medusaImg}>
            <img src={santelmoImg}></img>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
