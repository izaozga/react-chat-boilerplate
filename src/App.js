import React from "react";
import "./App.css";
import Profile from "./pages/Profile";
import ChatContainer from "./pages/ChatContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/chat-container">
            <ChatContainer />
          </Route>
          <Route path="*">
            <div>404 Page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
