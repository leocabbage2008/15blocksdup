import React from "react";

export default function Grid({ content }) {
  const [con, setCon] = React.useState(content);

  function clickHandler(row, col) {
    const emptyIndex = con.flat().indexOf(null);
    const [emptyRow, emptyCol]=[Math.floor(emptyIndex/4),emptyIndex%4];
    
    const around = [
      [emptyRow + 1, emptyCol],
      [emptyRow, emptyCol + 1],
      [emptyRow - 1, emptyCol],
      [emptyRow, emptyCol - 1],
    ];

    let canMove = false;
    around.some((item) => {
      if (row === item[0] && col === item[1]) {
        canMove = true;
        return true;
      }
      return false;
    })
    const dup = con;
    if (canMove) {
      [dup[row][col], dup[emptyRow][emptyCol]] = [dup[emptyRow][emptyCol], dup[row][col]];
      setCon([...dup])
    }
    else {
      alert("You can't move this block!")
    }
  }
  return (
    <div className="grid">
      {con.flat().map((obj) => {
        const index = con.flat().indexOf(obj);
        return (
          <div
            className="block"
            key={obj}
            onClick={()=>clickHandler(Math.floor(index / 4), index % 4)}
          >
            {obj}
          </div>
        );
      })}
    </div>
  );
}
