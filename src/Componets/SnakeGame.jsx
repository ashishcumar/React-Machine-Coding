import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [board, setBoard] = useState({});
  const [currMove, setCurrMove] = useState('A');
  const [dice, setDice] = useState('');
  const [currentPlace, setCurrentPlace] = useState({
    A: 1,
    B: 1,
  });
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (!board || !Object.keys(board)?.length) {
      let temp = {};
      Array.from(Array(100)).map((_, i) => {
        temp[(i + 1).toString()] = '';
      });
      temp[(1).toString()] = 'AB';
      setBoard(temp);
    }
  }, []);

  const play = () => {
    const num = Math.ceil(Math.random() * 6);
    setDice(num);
    setBoard((prev) => ({
      ...prev,
      [currentPlace[currMove]]: prev[currentPlace[currMove]].replace(
        currMove,
        ''
      ),
      [currentPlace[currMove] + num]: prev[[currentPlace[currMove] + num]]
        ? prev[[currentPlace[currMove] + num]] + currMove
        : currMove,
    }));
    setCurrentPlace((prev) => ({
      ...prev,
      [currMove]: prev[currMove] + num >= 100 ? 100 : prev[currMove] + num,
    }));
    setCurrMove((prev) => (prev == 'A' ? 'B' : 'A'));
  };

  console.log({ board, currMove, currentPlace });

  return (
    <div>
      <h1>Snake and Ladder Game</h1>
      <div
        style={{
          display: 'flex',
          // justifyContent: 'center',
          gap: '36px',
          alignItems: 'center',
          
        }}
      >
        <button onClick={play} style={{ height: '40px' }}>
          PLAY:- {currMove}
        </button>
      
        <p>
          {' '}
          Dice:- <b>{dice}</b>
        </p>
      </div>
      {winner ? <h1 style={{textAlign:'center'}}> Winner :- {winner} </h1> : null}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10,50px)',
          gridTemplateRows: 'repeat(10,50px)',
          marginTop:'36px'
        }}
      >
        {board && Object.keys(board)?.length ? (
          Object.keys(board).map((item) => {
            return (
              <div
                style={{
                  border: '1px solid black',
                  fontSize: '36px',
                  display: 'grid',
                  placeContent: 'center',
                }}
              >
                {board[item]}
              </div>
            );
          })
        ) : (
          <h1>loading board....</h1>
        )}
      </div>
    </div>
  );
}
