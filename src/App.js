import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  connect
} from "react-redux";
import "./App.css";

// Component Imports
import NavigationComponent from "./component/NavigationComponent";
import SidebarComponent from "./component/SidebarComponent";

// Page imports
import LoginPageComponent from "./page/LoginPageComponent";
import DashboardPageComponent from "./page/DashboardPageComponent";


const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

class App extends React.Component
{
  render()
  {
    const isAdmin = this.props.user.currentUser.isAdmin;

    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPageComponent />
          </Route>
          {isAdmin && (
            <>
              <NavigationComponent />
              <Container>
                <SidebarComponent />
                <Route exact path="/">
                  <DashboardPageComponent/>
                </Route>
              </Container>
            </>
          )}
        </Switch>
      </Router>
    );
  }
}

/**
 * mapStateToProps
 * @param state
 * @returns {{user: any}}
 */
const mapStateToProps = state => ({
  user: state.user
})

/** Connect and export the default class component. */
export default connect(
  mapStateToProps,
  null
)(App);
