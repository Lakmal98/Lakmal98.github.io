import React from "react";
import randomColor from "../../utils/util";
import { hexToRgb } from "../../utils/util";

function Service({ service }) {
  const { title, content, icon, color, contentColor } = service;
  const generatedColor = color ?? randomColor(true);
  

  return (
    <div
      className={
        contentColor === "light"
          ? "service-box rounded data-background padding-30 text-center text-light shadow-blue"
          : "service-box rounded data-background padding-30 text-center shadow-blue"
      }
      data-color="#6C6CE5"
      style={{
        background: generatedColor,
        boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(generatedColor)}, 0.5)`,
      }}
    >
      <img src={icon} alt={title} 
      width={100}
       />
      <h3 className="mb-3 mt-0">{title}</h3>
      <p className="mb-0">{content}</p>
    </div>
  );
}

export default Service;
