import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [grid, setGrid] = useState([["a", "b", "c"]]);

  const addRow = () => {
    setGrid((prev) => {
      return prev.map((arr) => {
        return [...arr, ""];
      });
    });
  };

  const addCol = () => {
    setGrid((prev) => {
      const newArr = Array.from(Array(prev[0]?.length)).map((_, i) => "");
      return [...prev, newArr];
    });
  };

  const updateVal = (i, j, val) => {
    setGrid((prev, iId) => {
      return prev.map((arr, jId) => {
        if (iId == i && jId == i) {
          return val;
        } else {
          return arr;
        }
      });
    });
  };

  return (
    <div>
      <h1>Google sheet mockup</h1>
      <div
        style={{
          display: "flex",
          padding: "12px",
          gap: "12px",
          border: "1px solid black",
          width: "fit-content",
        }}
      >
        <button onClick={addRow}> Add Row </button>
        <button onClick={addCol}> Add Col </button>
      </div>

      <div style={{ display: "flex" }}>
        {grid.map((rowArr, i) => {
          return (
            <div style={{ display: "grid" }}>
              {rowArr.map((cols, j) => {
                return (
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      border: "1px solid black",
                      display: "grid",
                      placeContent: "center",
                      fontWeight: "bold",
                    }}
                    contentEditable
                    onKeyUp={(e) => updateVal(i, j, e.target.innerHTML)}
                  >
                    {cols}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
