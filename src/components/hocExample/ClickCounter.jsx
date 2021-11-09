import withCount from "../hoc/withCount";

const ClickCounter = ({ count, incrementCount }) => {
  return <h2 onClick={incrementCount}>clicked {count} times</h2>;
};

export default withCount(ClickCounter, 10);
