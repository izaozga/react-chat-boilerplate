import React, { useRef } from "react";
import { connect } from "react-redux";
// import {SET_USERNAME} from "../../../store/consts";
import { setUsername } from "../../../store/actions/globalActions";
import { bindActionCreators } from "redux";

const ReduxWithReact = (props) => {
  const inputRef = useRef();
  const setNewUsername = () => {
    // props.dispatch({
    //   type: SET_USERNAME,
    //   payload: inputRef.current.value,
    // })
    props.setUsername(inputRef.current.value);
  };

  return (
    <div>
      <h1>Redux with react.</h1>
      <h2>Username: {props.username}</h2>
      <input ref={inputRef} />
      <button onClick={setNewUsername}>Set new username</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.globalReducer.username,
});

// const mapDispatchToProps = (dispatch) => ({
//   dispatch,
// })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setUsername: setUsername,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReduxWithReact);
