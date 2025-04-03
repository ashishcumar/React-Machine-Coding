import React, { useEffect, useState } from 'react';
import './style.css';

export default function SelectableDivs() {
  const [grid, setGrids] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    console.log(id);
    setSelected((prev) => {
      if (!prev.includes()) {
        return id;
      }
    });
  };

  useEffect(() => {
    if (grid.length == 0) {
      const temp = [];
      Array.from(Array(9)).map((_) => {
        temp.push(Array.from(Array(9), () => ''));
      });
      setGrids(temp);
    }
  }, []);

  const getBG = (indI, indJ) => {
    if(!selected?.length) return 'white'
    const [i, j] = selected?.split('-');
    if (indI <= i && indJ <= j) return 'lightblue';
    return 'white';
  };


  return (
    <div>
      <div>
        {grid?.map((arr, i) => {
          return (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(9,1fr)',
                gap: '0',
                width: 'fit-content',
              }}
              onMouseUp={() => setIsDragging(false)}
            >
              {arr?.map((item, j) => {
                return (
                  <div
                    style={{
                      height: '50px',
                      width: '50px',
                      border: '1px solid black',
                      background: getBG(i, j),
                    }}
                    onMouseDown={() => {
                      setIsDragging(true);
                      toggleSelect(`${i}-${j}`);
                    }}
                    onMouseEnter={() => {
                      if (isDragging) toggleSelect(`${i}-${j}`);
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
