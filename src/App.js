import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import Profile from "./pages/Profile";
import ChatContainer from "./pages/ChatContainer";
import Counter from "./pages/Counter";
import LifecycleMethods from "./pages/LifecycleMethods";

import "./App.css";

class App extends React.Component {
  state = {
    language: "pl",
  };

  changeLanguage = () => {
    this.setState(({ language }) => ({
      language: language === "pl" ? "en" : "pl",
    }));
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <button onClick={this.changeLanguage}>Switch Language</button>
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
          <Counter />
          <LifecycleMethods />
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
