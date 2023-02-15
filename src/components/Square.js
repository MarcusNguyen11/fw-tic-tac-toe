import React from "react";

function Square({ title, onClick }) {
  return (
    <button className={"square"} onClick={onClick}>
      {title}
    </button>
  );
}

export default Square;
