import React, {useState} from "react";
import {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware,
} from "redux";
import styles from "./PureRedux.module.css";

const INPUT_STRING = "witam";

const PureRedux = () => {
  const [composeString, setComposeString] = useState('Witam')

  const composeHandler = (e) => {
    // const composed = INPUT_STRING;
    // const composed = addDot(separateBySpace(makeUppercase(INPUT_STRING)))
    const composed = compose(separateBySpace, makeUppercase, addDot)(INPUT_STRING);
    setComposeString(composed);
  };

  return <div>
    <div className={styles.ComposeSection}>
      <h2 className={styles.ComposeSectionHeader}>COMPOSE</h2>
      <button onClick={composeHandler}>Run Compose</button>
      <button onClick={() => setComposeString(INPUT_STRING)}>Reset</button>
      <h3>{composeString}</h3>
    </div>
  </div>;
};

export default PureRedux;

// compose functions set
function makeUppercase(value) {
  return value.toUpperCase();
}

function separateBySpace(value) {
  return value.split("").join(" ");
}

function addDot(value) {
  return value + ".";
}

