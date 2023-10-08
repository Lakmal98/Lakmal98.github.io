import React from "react";
import randomColor from "../../utils/util";

function Skill({ progress, isVisible }) {
  const { title, percentage, progressColor,starts } = progress;
  const winWidth = window.innerWidth;
  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <div
          className="progress-bar data-background"
          style={
            isVisible
              ? {
                  width: `${percentage}%`,
                  background: progressColor ?? randomColor(),
                }
              : { width: 0, background: progressColor }
          }
        ></div>
      );
    }
    return (
      <div
        className="progress-bar data-background"
        style={{
          width: `${percentage}%`,
          background: progressColor,
        }}
      ></div>
    );
  };
  return (
    <div className="skill-item">
      <div className="skill-info clearfix">
        <h4 className="float-left mb-3 mt-0"
        style={{float:"left"}}
        >{title}</h4>
        <span className="float-right"
        style={{float:"right",fontSize:"12px",color:"gray"}}
        >{starts ? new Date().getFullYear() - starts : 0} Years</span>
      </div>
      <div className="progress">{progressQuery()}</div>
    </div>
  );
}

export default Skill;
