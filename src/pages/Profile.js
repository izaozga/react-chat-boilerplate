import React from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import styles from './Profile.module.css';

class Profile extends React.Component {
  render() {
    const routeName = this.context.language === "pl" ? "Czat" : "Chat";
    return (
      <div>
        <h1>Profile</h1>
        {/*<div className={styles.error}>Error</div>*/}
        {/*<div className="error">Error global</div>*/}
        <Link to="chat-container">{routeName}</Link>
      </div>
    );
  }
}

Profile.contextType = LanguageContext;

export default Profile;
