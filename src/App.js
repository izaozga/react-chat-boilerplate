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
import Navbar from "./pages/Navbar";
import Page404 from "./pages/Page404";
import ErrorCss from "./pages/ErrorCss";

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
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          changeLanguage: this.changeLanguage,
        }}
      >
        <div className="App">
          <Router>
            <Navbar />
            <div className="Routes">
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
                <Route path="/counter">
                  <Counter />
                </Route>
                <Route path="/lifecycle-methods">
                  <LifecycleMethods />
                </Route>
                <Route path="/error-css">
                  <ErrorCss />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
