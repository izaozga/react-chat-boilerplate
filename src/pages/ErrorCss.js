import React from "react";
import styles from "./ErrorCss.module.css";

class ErrorCss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
    };
  }

  componentDidMount() {
    this.mouseEventListener = window.addEventListener("mousemove", (e) => {
      this.setState({
        mouseX: e.offsetX,
        mouseY: e.offsetY,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener(this.mouseEventListener);
  }

  render() {
    const { mouseX, mouseY } = this.state;
    const R = Math.min(255, mouseX / 3);
    const G = Math.min(255, mouseY / 3);

    return (
      <div>
        <h1>CSS Example</h1>
        <div className={styles.error}>Error</div>
        <div className="error">Error global</div>
        <div>
          <div>Mouse X: {mouseX}</div>
          <div>Mouse Y: {mouseY}</div>
        </div>
        <div style={{ color: `rgb(${R}, ${G}, 50)` }}>AWESOME COLOR</div>
      </div>
    );
  }
}

export default ErrorCss;
