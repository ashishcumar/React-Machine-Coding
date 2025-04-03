import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', width: '200px' }}>
          {Array.from({ length: 5 }).map((_, i) => {
            return (
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    border: '1px solid black',
                    background: (hover || rating) >= i + 1 ? 'yellow' : '',
                    marginRight: '20px',
                    display: 'grid',
                    placeContent: 'center',
                  }}
                  onClick={() => {
                    setRating(i + 1);
                  }}
                  onMouseEnter={() => {
                    setHover(i + 1);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                ></div>
                <div
                  style={{
                    height: '40px',
                    width: '20px',
                    border: '1px solid black',
                    background: (hover || rating) >= i + 0.5 ? 'yellow' : '',
                    position: 'absolute',
                    top: '0',
                    display: 'grid',
                    placeContent: 'center',
                  }}
                  onClick={() => {
                    setRating(i + 0.5);
                  }}
                  onMouseEnter={() => {
                    setHover(i + 0.5);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
