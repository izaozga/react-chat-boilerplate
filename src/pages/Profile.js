import React from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    const routeName = this.context.language === "pl" ? "Czat" : "Chat";
    return (
      <div>
        <h1>Profile</h1>
        <Link to="chat-container">{routeName}</Link>
        <h2>Redux username: {this.props.username}</h2>
      </div>
    );
  }
}

Profile.contextType = LanguageContext;

const mapStateToProps = (state) => ({
  username: state.globalReducer.username,
});

export default connect(mapStateToProps)(Profile);
