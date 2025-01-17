import React, { useEffect, useState, useRef } from "react";

const Progress = () => {
  const [prog, setProg] = useState(0);
  const progress = 50;
  const intervalRef = useRef(null);

  useEffect(() => {
    if(progress){
      intervalRef.current = setInterval(()=>{
        setProg((prev) => {
          if(prev < progress){
            return prev + 1
          }else{
            clearInterval(intervalRef.current)
            intervalRef.current = null;
            return prev
          }
        })
      },20)
    }

    return ()=>{
      if(intervalRef.current){
        clearInterval(intervalRef.current)
      }
    }
  },[progress])

  return (
    <div
      style={{
        height: "40px",
        width: "250px",
        border: "1px solid black",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${prog}%`,
          background: "red",
          transition: "width 0.2s linear",
        }}
      ></div>
    </div>
  );
};

export default Progress;
