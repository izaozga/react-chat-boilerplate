import React from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

class Profile extends React.Component {
  render() {
    const routeName = this.context.language === "pl" ? "Czat" : "Chat";
    return (
      <div>
        <h1>Profile</h1>
        <Link to="chat-container">{routeName}</Link>
      </div>
    );
  }
}

Profile.contextType = LanguageContext;

export default Profile;
