import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [hilighted, setHighlighted] = useState([]);
  const [products, setProducts] = useState([]);
  const [val, setVal] = useState('');
  const getProd = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const res = await data.json();
    if (res.products) {
      setProducts(res.products.map((item) => item.title));
      setHighlighted(res.products.map((item) => item.title));
    }
  };

  useEffect(() => {
    getProd();
  }, []);

  const highlightText = (val) => {
    if (!val) {
      setVal('');
      setHighlighted(products);
      return;
    }

    setVal(val);

    const updatedProducts = products.map((item) => {
      if (item.toLowerCase().includes(val.toLowerCase())) {
        const splitted = item.toLowerCase().split(val.toLowerCase());
        console.log({ [item]: splitted });
        return (
          <span>
            {splitted.map((text, i, currArr) => {
              return (
                <span>
                  {text == '' ? (
                    <span
                      style={{
                        background: 'yellow',
                        margin: '-4',
                        padding: '0',
                      }}
                    >
                      {val}
                    </span>
                  ) : (
                    <>
                      {text}
                      {i < currArr.length - 1 ? (
                        <span
                          style={{
                            background: 'yellow',
                            margin: '-4',
                            padding: '0',
                          }}
                        >
                          {val}
                        </span>
                      ) : null}
                    </>
                  )}
                </span>
              );
            })}
          </span>
        );
      }
    });

    setHighlighted(updatedProducts);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div
        style={{
          border: '1px solid black',
          padding: '12px',
          display: 'grid',
          placeContent: 'center',
        }}
      >
        <input
          style={{ margin: 'auto', width: '300px', height: '30px' }}
          value={val}
          onChange={(e) => highlightText(e.target.value)}
        />
        {hilighted?.map((item) => {
          return <p style={{ margin: '0' }}> {item} </p>;
        })}
      </div>
    </div>
  );
}
