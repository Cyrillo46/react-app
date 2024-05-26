export const Square = ({ value, squareClick }) => {
  return (
    // individual square on board
    <button className="square" onClick={squareClick}>
      {value}
    </button>
  );
};
