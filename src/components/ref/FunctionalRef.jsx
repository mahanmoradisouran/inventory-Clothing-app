import React, { useEffect, useRef, useState } from "react";

const FunctionalRef = () => {
  const [inputValue, setInputValue] = useState("");
  const prevStateValue = useRef();
  useEffect(() => {
    prevStateValue.current = inputValue;
  }, [inputValue]);
  
  const changeName = (e) => {
      setInputValue(e.target.value)
  }
  
  return (
    <div>
      <input text="text" onChange={changeName} value={inputValue} />
      <p>my name is {inputValue} its to be {prevStateValue.current}</p>
    </div>
  );
};

export default FunctionalRef;
