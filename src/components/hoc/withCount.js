import { useState } from "react";

const withCount = (WrappedComponent, addedNumber) => {
  const Update = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + addedNumber);
    };
    return <WrappedComponent {...props} incrementCount={incrementCount} count={count}/>
  };

  return Update;
};

export default withCount;
