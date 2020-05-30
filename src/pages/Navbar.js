import React from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/chat-container">Chat</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/lifecycle-methods">Lifecycle Methods</NavLink>
          </li>
          <li>
            <NavLink to="/error-css">CSS Example</NavLink>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={this.context.changeLanguage}>
              Switch Language
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

Navbar.contextType = LanguageContext;

export default Navbar;
