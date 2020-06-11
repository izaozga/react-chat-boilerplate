import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import PureRedux from "./pages/PureRedux";
import ReduxWithReact from "./pages/ReduxWithReact";
import ReduxWeather from "./pages/ReduxWeather";

const ReduxExamplePage = () => {
  const match = useRouteMatch();

  return (
    <div>
      <div className="BottomNavbarRoutes">
        <Switch>
          <Route exact path={match.path}>
            <div>Welcome to redux.</div>
          </Route>
          <Route path={`${match.path}/pure-redux`}>
            <PureRedux />
          </Route>
          <Route path={`${match.path}/react-redux`}>
            <ReduxWithReact />
          </Route>
          <Route path={`${match.path}/redux-thunk`}>
            <ReduxWeather />
          </Route>
        </Switch>
      </div>
      <div className="BottomNavbar">
        <ul>
          <li>
            <NavLink to={`${match.path}/pure-redux`}>Pure Redux</NavLink>
          </li>
          <li>
            <NavLink to={`${match.path}/react-redux`}>Redux with React</NavLink>
          </li>
          <li>
            <NavLink to={`${match.path}/redux-thunk`}>Redux Thunk</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReduxExamplePage;
