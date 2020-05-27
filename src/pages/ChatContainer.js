import React from "react";
import { Link } from "react-router-dom";

class ChatContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Chat Container</h1>
        <Link to="profile">Profile</Link>
      </div>
    );
  }
}

export default ChatContainer;
