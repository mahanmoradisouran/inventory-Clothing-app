const Wrapper = (WrappedCommponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrappedCommponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
