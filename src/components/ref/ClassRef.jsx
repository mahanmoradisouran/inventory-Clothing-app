import { Component, createRef } from "react";

class ClassRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  render() {
    return (
      <>
        <input type="text" />
        <button onClick={this.saveInputHandler}>Reset</button>
      </>
    );
  }
}

export default ClassRef;
