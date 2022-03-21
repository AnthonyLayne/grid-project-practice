import React from "react";
import "./index.css";

export default function Grid({ grid }) {
  return (
    <div className="grid">
      {grid.map((row) => {
        return (
          <div className="row">
            {row.map((square) => {
              return <div className={square ? "square selected" : "square"} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
