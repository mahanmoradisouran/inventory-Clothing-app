import withCount from "../hoc/withCount";

const HoverCounter = ({count , incrementCount}) => {
  return <h2 onMouseOver={incrementCount}>clicked {count} times</h2>;
};

export default withCount(HoverCounter , 5);
