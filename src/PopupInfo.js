import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { InfoCircleOutlined } from "@ant-design/icons";

function PopupInfo() {
  return (
    <div>
      {" "}
      <Popup
        trigger={<InfoCircleOutlined style={{ fontSize: 30, marginTop: 5 }} />}
        modal
      >
        <div className="modal">
          <div className="content">
            Every 10 seconds, you will get a new clue. Your job is to find
            connection between clues. Every clue will decrease your point/points
            that you can get by 1. If you feel lucky you can stop the timer and
            try to guess. If you guess it wrong, other team (in early stages
            other players) will guess it.
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopupInfo;
