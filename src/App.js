import React, { useState } from "react";

import "./App.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Keypad from "./components/Keypad";

const DEFAULT_GRID = [
  [false, false, false],
  [false, true, false],
  [false, false, false],
];

const findPostion = (prevGrid) => {
  let x;
  const y = prevGrid.findIndex((row) => {
    x = row.findIndex((square) => {
      return square;
    });
    return x !== -1;
  });
  return { x, y };
};

function App() {
  const [grid, setGrid] = useState(DEFAULT_GRID);

  const handleAddRow = () => {
    setGrid((prevGrid) => {
      const additionalRow = prevGrid[0].map(() => false);
      return [...prevGrid, additionalRow];
    });
  };

  const handleAddColumn = () => {
    setGrid((prevGrid) => {
      return prevGrid.map((row) => [...row, false]);
    });
  };

  const handleClick = (moveX, moveY) => {
    setGrid((prevGrid) => {
      const { x, y } = findPostion(prevGrid);
      const newXPosition = x + moveX;
      const newYPosition = y + moveY;

      if (
        newYPosition < 0 ||
        newYPosition > prevGrid.length - 1 ||
        newXPosition < 0 ||
        newXPosition > prevGrid[0].length - 1
      )
        return prevGrid;

      return prevGrid.map((row, currentY) => {
        return row.map((_, currentX) => {
          return currentY === newYPosition && currentX === newXPosition;
        });
      });
    });
  };

  return (
    <div className="app">
      <Header>
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
        <button type="button" onClick={handleAddColumn}>
          Add Column
        </button>
      </Header>

      <Grid grid={grid} />

      <Keypad
        handleClickUpLeft={() => handleClick(-1, -1)}
        handleClickUpRight={() => handleClick(1, -1)}
        handleClickRight={() => handleClick(1, 0)}
        handleClickLeft={() => handleClick(-1, 0)}
        handleClickDown={() => handleClick(0, 1)}
        handleClickUp={() => handleClick(0, -1)}
        handleClickReset={() => setGrid(DEFAULT_GRID)}
      />
    </div>
  );
}

export default App;
