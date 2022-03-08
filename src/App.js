import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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

import ProductListPageComponent from "./page/ProductListPageComponent";
import ProductAddPageComponent from "./page/ProductAddPageComponent";


import UserListPageComponent from "./page/UserListPageComponent";
import UserAddPageComponent from "./page/UserAddPageComponent";
import UserEditPageComponent from "./page/UserEditPageComponent";

import TransactionListPageComponent from "./page/TransactionListPageComponent";
import CategoryListPageComponent from "./page/CategoryListPageComponent";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

class App extends React.Component
{
  render()
  {
    // Check if they are logged in
    let isLoggedIn = this.props.user.currentUser;
    let isAdmin = (!isLoggedIn ? false : this.props.user.currentUser.is_admin);

    return (
      <Router>
        <Switch>
          <Route path="/login">
            {isLoggedIn && isAdmin ? (
              <Redirect to="/"/>
            ) : (
              <LoginPageComponent/>
            )}
          </Route>
          {isLoggedIn && isAdmin ? (
            <>
              <NavigationComponent />
              <Container>
                <SidebarComponent />
                <Route exact path="/">
                  <DashboardPageComponent/>
                </Route>

                <Route path="/user-list">
                  <UserListPageComponent/>
                </Route>

                <Route path="/user-add">
                  <UserAddPageComponent/>
                </Route>

                <Route path="/user-edit">
                  <UserEditPageComponent/>
                </Route>

                <Route path="/product-list">
                  <ProductListPageComponent/>
                </Route>

                <Route path="/category-list">
                  <CategoryListPageComponent/>
                </Route>

                <Route path="/transaction-list">
                  <TransactionListPageComponent/>
                </Route>

                <Route path="/product-add">
                  <ProductAddPageComponent/>
                </Route>
              </Container>
            </>
          ) : (
            <Redirect to="/login"/>
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
