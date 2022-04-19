import React from "react";
import { Progress } from "antd";

function TimerBar() {
  return (
    <div className="TimerBar">
      <div style={{ width: "100vw" }}>
        <Progress
          type="line"
          percent={50}
          showInfo={false}
          strokeColor="blue"
        />
      </div>
    </div>
  );
}

export default TimerBar;
