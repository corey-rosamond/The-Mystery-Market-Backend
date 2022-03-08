import React from "react";
import styled from "styled-components";
import {
  Link
} from "react-router-dom";
import {
  AttachMoney,
  BarChart, ChatBubbleOutline, DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity, Report,
  Storefront,
  Timeline,
  TrendingUp, WorkOutline
} from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:active{
    background: rgb(240, 240, 255);
  }
  &:hover{
    background: rgb(240, 240, 255);
  }
`;

class SidebarComponent extends React.Component
{

  render()
  {
    return(
      <Container>
        <Wrapper>

          <Menu>
            <Title>Dashboard</Title>
            <List>
              <Link to="/" className="link">
                <ListItem>
                  <LineStyle className="sidebarIcon" />
                  Home
                </ListItem>
              </Link>
            </List>
          </Menu>

          <Menu>
            <Title>Quick Menu</Title>
            <List>
              <Link to="/user-list" className="link">
                <ListItem>
                  <PermIdentity className="sidebarIcon" />
                  Users
                </ListItem>
              </Link>

              <Link to="/product-list" className="link">
                <ListItem>
                  <Storefront className="sidebarIcon" />
                  Products
                </ListItem>
              </Link>

              <Link to="/category-list" className="link">
                <ListItem>
                  <Storefront className="sidebarIcon" />
                  Categories
                </ListItem>
              </Link>

              <Link to="/transaction-list" className="link">
                <ListItem>
                  <AttachMoney className="sidebarIcon" />
                  Transactions
                </ListItem>
              </Link>

            </List>
          </Menu>

          <Menu>
            <Title>Temporary</Title>
            <Link to="/product-add" className="link">
              <ListItem>
                <Storefront className="sidebarIcon" />
                Add Product
              </ListItem>
            </Link>
          </Menu>
        </Wrapper>
      </Container>
    );
  }
}

export default SidebarComponent;