import react, { useState, useContext, useReducer } from "react";

export const CounterContext = react.createContext();
export const CounterContextDispatcher = react.createContext();

const initialState = 0;

const reduce = (state, action) => {
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reduce, initialState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const CountActions = () => {
  return useContext(CounterContextDispatcher);
};
