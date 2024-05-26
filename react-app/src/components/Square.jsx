import { useState } from "react";

export const Square = ({ value, squareClick }) => {
  return (
    <button className="square" onClick={squareClick}>
      {value}
    </button>
  );
};
