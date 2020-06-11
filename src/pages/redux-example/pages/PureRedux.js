import React, { useEffect, useState } from "react";
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
  const [composeString, setComposeString] = useState("Witam");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState().value);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const composeHandler = () => {
    // const composed = INPUT_STRING;
    // const composed = addDot(separateBySpace(makeUppercase(INPUT_STRING)))
    const composed = compose(
      separateBySpace,
      makeUppercase,
      addDot
    )(INPUT_STRING);
    setComposeString(composed);
  };

  const storeHandler = () => {
    console.log(store);
    console.log(store.getState());
  };

  const sampleDispatchHandler = () => {
    store.dispatch({
      type: "Sample action",
      payload: "New data",
    });
  };

  const increaseCounterHandler = () => {
    store.dispatch({
      type: "INCREASE",
      payload: {
        step: 2,
      },
    });
  };

  return (
    <div>
      <div className={styles.Section}>
        <h2 className={styles.SectionHeader}>COMPOSE</h2>
        <button onClick={composeHandler}>Run Compose</button>
        <button onClick={() => setComposeString(INPUT_STRING)}>Reset</button>
        <h3>{composeString}</h3>
      </div>
      <div className={styles.Section}>
        <h2 className={styles.SectionHeader}>STORE AND REDUCER</h2>
        <button onClick={storeHandler}>Print store</button>
        <button onClick={sampleDispatchHandler}>Dispatch Sample</button>
        <button onClick={increaseCounterHandler}>Increase</button>
        <h3>{counter}</h3>
      </div>
    </div>
  );
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

// store and reducer
function reducer(state = { value: 1 }, action) {
  if (action.type === "INCREASE") {
    return {
      ...state,
      value: state.value + action.payload.step,
    };
  }

  console.log("Action Triggered", action);
  return state;
}

const store = createStore(reducer);
