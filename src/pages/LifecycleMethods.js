import React from "react";

class LifecycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
    // this.onResizeHandler = this.onResizeHandler.bind(this);
  }

  onResizeHandler(e) {
    this.setState({ width: e.target.innerWidth });
  }

  componentDidMount() {
    this.resizeListener = window.addEventListener(
      "resize",
      this.onResizeHandler
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener);
  }

  render() {
    return <div>Resized component. Width: {this.state.width}</div>;
  }
}

export default LifecycleMethods;
