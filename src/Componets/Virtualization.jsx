import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [prodList, setProdList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleProds, setVisibleProds] = useState([]);

  const getProd = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=200');
    const res = await data.json();
    if (res.products) {
      console.log(res.products);
      setProdList(res.products);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const startTemp = Math.floor(scrollTop / 150);
    const endTemp = startTemp + Math.ceil(600 / 150);
    setStartIndex(startTemp);
    setVisibleProds(
      prodList.slice(startTemp, Math.min(endTemp, prodList?.length))
    );
  };

  useEffect(() => {
    getProd();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div
        style={{
          position: 'relative',
          height: '600px',
          border: '1px solid red',
          overflow: 'scroll',
        }}
        onScroll={handleScroll}
      >
        <div
          style={{
            position: 'relative',
            border: '1px solid black',
            height: `${prodList.length * 150}px`,
            width: '100%',
          }}
        >
          {visibleProds?.slice(0, 5).map((item, i) => {
            return (
              <div
                style={{
                  border: '1px solid black',
                  height: '150px',
                  marginBottom: '12px',
                  position: 'absolute',
                  width: '100%',
                  top: `${(startIndex + i) * 150}px`,
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
