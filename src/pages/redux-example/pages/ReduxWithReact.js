import React from "react";
import { connect } from "react-redux";

const ReduxWithReact = (props) => {
  return (
    <div>
      <h1>Redux with react.</h1>
      <h2>Username: {props.username}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.globalReducer.username,
});

export default connect(mapStateToProps)(ReduxWithReact);
