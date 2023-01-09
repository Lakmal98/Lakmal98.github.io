import React from "react";

function Counter({ counterItem }) {
  const { title, icon } = counterItem;

  return (
    <div className="fact-item">
      <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection:"column"}}
      >
      <img src={icon} alt={title}
        style={{ width: "50px", height: "50px", borderRadius: "50%"}} />
      <p className="mb-0" style={{fontSize:"1.5rem"}}>{title}</p>
      </div>
    </div>
  );
}

export default Counter;
