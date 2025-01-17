// import React, { useEffect } from "react";
// import { useState } from "react";
// // import "./Index.css";

// function Index() {
//   const [count, setCount] = useState(0);

//   const returnPromise = async () => {
//     console.log("calling returnPromise",count);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (count < 3) {
//           reject(`retry ${3 - count} times`);
//         } else {
//           resolve("success");
//         }
//       }, 3000);
//     });
//   };

//   const callPromiseFunction = async () => {
//     console.log("calling callPromiseFunction");
//     try {
//       const res = await returnPromise();
//       if(res){
//         console.log("success")
//         alert('Promise resolved Succesfully')
//       }
//     } catch (e) {
//       console.log({ e, count });
//       if (count < 3) {
//         console.log('inside')
//         setCount((prev) => prev+1);
//       }
//     }
//   };

//   useEffect(() => {
//     console.log('useEfffet 1')
//     if(count <= 3){
//       console.log('useEfffet 2')
//       callPromiseFunction();
//     }
//   }, [count]);

//   return <div> </div>;
// }

// export default Index;

// import React, { useEffect, useRef, useState } from "react";

// function Index() {
//   const [arr, setArr] = useState([9, 5, 3, 1, 4, 8, 7]);
//   const [isSorted, setIsSorted] = useState(false);
//   const intervalRef = useRef("");
//   const returnPromise = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("success");
//       }, 2000);
//     });
//   };

//   // const checkResolved = () => {
//   //   return arr.every((item, i, currArr) =>
//   //     i < currArr.length - 1 ? item < currArr[i + 1] : true
//   //   );
//   // };

//   const sort = async () => {
//     const temp = [...arr];
//     console.log("inside sort --->",arr)

//     for (let i = 0; i < arr.length; i++) {
//       console.log("inside i --->",i)
//       for (let j = i + 1; j < arr.length; j++) {
//         console.log("inside j --->",j)
//         if (temp[i] > temp[j]) {
//           console.log("inside if condition --->",temp[i], temp[j])
//           [temp[i], temp[j]] = [temp[j], temp[i]];
//           const res =  await returnPromise()
//           if(res){
//             console.log("res --->",res)
//             setArr(temp);
//           }
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     console.log("arr changed --->", arr);
//   }, [arr]);

//   return (
//     <div>
//       Index
//       <div
//         style={{
//           display: "flex",
//           alignItems: "end",
//           gap: "12px",
//           transition: "all 2s",
//         }}
//       >
//         {arr.map((item) => {
//           return (
//             <div
//               style={{
//                 height: `${item * 10}px`,
//                 width: "20px",
//                 background: "red",
//               }}
//             ></div>
//           );
//         })}
//       </div>
//       <button onClick={sort}> sort </button>
//     </div>
//   );
// }

// export default Index;

import React, { useEffect, useRef, useState } from "react";

function Index() {
  const [arr, setArr] = useState([9, 5, 3, 1, 4, 8, 7]);
  const [isSorted, setIsSorted] = useState(false);

  const returnPromise = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 1000);
    });
  };

  const sort = async () => {
    const temp = [...arr];
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < temp.length - 1; i++) {
        if (temp[i] > temp[i + 1]) {
          [temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];
          swapped = true;

          const res = await returnPromise();
          if (res) {
            setArr([...temp]);
          }
        }
      }
    }

    setIsSorted(true);
  };

  const getRandomColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <div>
      <h1>Bubble sort UI</h1>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          gap: "8px",
          transition: "all 2s",
          height: `${Math.max(...arr) * 50 + 20}px`,
          border: "1px solid black",
        }}
      >
        {arr.map((item, index) => (
          <div
            key={index}
            style={{
              height: `${item * 50}px`,
              width: "80px",
              background: `${getRandomColors()}`,
              transition: "height 1s",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              display: "grid",
              placeContent: "center",
              fontSize: "48px",
              fontWeight: "bold",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "36px",
        }}
      >
        <button
          onClick={sort}
          disabled={isSorted}
          style={{ padding: "12px 36px", margin: "auto" }}
        >
          {isSorted ? "Sorted!" : "Sort"}
        </button>
      </div>
    </div>
  );
}

export default Index;
