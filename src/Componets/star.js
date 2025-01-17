import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [hover, setHover] = useState(0);
  const [rated, setRated] = useState(0);
  const [half, setHalf] = useState(false);

  const stars = 5;

  const getStarColor = (index) => {
    console.log({index,rated})
    if (hover) return index < hover ? 'gold' : 'grey';
    if (index < rated && rated-index == 0.5) {
       return 'linear-gradient(to right, red 50%, grey 50%)'
    }
    return index < rated ? 'gold' : 'grey';
  };

  return (
    <div>
      <h1>Star Rating System</h1>
      <div style={{ display: 'flex', width: 'fit-content', gap: '12px' }}>
        {Array.from(Array(stars)).map((_, i) => (
          <div
            key={i}
            id={`div-${i + 1}`}
            style={{
              border: '1px solid black',
              height: '40px',
              width: '40px',
              background: getStarColor(i),
              clipPath:
                'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
            onClick={(e) => {
              const { clientX } = e;
              const rect = document
                .getElementById(`div-${i + 1}`)
                .getBoundingClientRect();
              const mid = rect.left + rect.width / 2;
              if (mid > clientX) {
                setHalf(true);
                setRated(i + 1 - 0.5);
              } else {
                setHalf(false);
                setRated(i + 1);
              }
            }}
            // onMouseOver={() => setHover(i + 1)}
            // onMouseLeave={() => setHover(0)}
          ></div>
        ))}
      </div>
      <p>
        {`Current Rating: ${rated} `}
        {half && rated % 1 !== 0 ? '(Half Star)' : ''}
      </p>
    </div>
  );
}
