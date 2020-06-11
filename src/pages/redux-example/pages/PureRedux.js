import React from "react";
import {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware,
} from "redux";

const PureRedux = () => {
  const compose = () => {
    // run compose
  };

  return <div></div>;
};

export default PureRedux;

// compose
function makeUppercase(value) {
  return value.toUpperCase();
}

function separateBySpace(value) {
  return value.split("").join(" ");
}

function addDot(value) {
  return value + ".";
}

const inputString = "witam";
console.log(addDot(separateBySpace(makeUppercase(inputString))));
