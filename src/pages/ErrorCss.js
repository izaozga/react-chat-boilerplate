import React from "react";
import styles from "./ErrorCss.module.css";

class ErrorCss extends React.Component {
  render() {
    return (
      <div>
        <h1>CSS Example</h1>
        <div className={styles.error}>Error</div>
        <div className="error">Error global</div>
      </div>
    );
  }
}

export default ErrorCss;
