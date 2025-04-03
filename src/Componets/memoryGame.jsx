import React, { useEffect, useState } from 'react';
import './style.css';

export default function MemoryGameJSX() {
  const [grid, setGrid] = useState([]);
  const [currSelected, setCurrSelected] = useState({});

  function generateMemoryGameArray(size) {
    if (size % 2 !== 0) {
      throw new Error('Size must be even for pairs.');
    }

    const array = new Array(size).fill(null);
    const usedPairs = new Set();

    for (let i = 0; i < size / 2; i++) {
      let randomString;
      do {
        randomString = Math.random().toString(36).substring(2, 6);
      } while (usedPairs.has(randomString));

      usedPairs.add(randomString);

      let indices = [];
      while (indices.length < 2) {
        let randomIndex = Math.floor(Math.random() * size);
        if (array[randomIndex] === null) {
          array[randomIndex] = {
            isOpened: false,
            id: randomIndex,
            value: randomString,
          };
          indices.push(randomIndex);
        }
      }
    }

    return array;
  }

  const handleClick = (data) => {
    if (!Object.keys(currSelected).length) {
      setCurrSelected(data);
      return;
    }
    if (currSelected.value == data.value) {
      setGrid((prev) =>
        prev.map((item) => {
          if (item.value == data.value) {
            return {
              ...item,
              isOpened: true,
            };
          }
          return item;
        })
      );
      setCurrSelected({});
    } else {
      setCurrSelected({});
    }
  };

  useEffect(() => {
    if (grid.length == 0) {
      setGrid(generateMemoryGameArray(16));
    }
  }, []);

  return (
    <div>
      <h1>3:55</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          width: 'fit-content',
        }}
      >
        {grid?.map((item, i) => {
          return (
            <div
              style={{
                height: '50px',
                width: '50px',
                border: '1px solid black',
                background:
                  item.isOpened || currSelected.id === i ? '' : 'lightgrey',
                display: 'grid',
                placeContent: 'center',
                fontSize: '18px',
                fontWeight: '600',
              }}
              onClick={() => handleClick(item)}
            >
              {item.isOpened || currSelected.id === i ? item.value : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}
