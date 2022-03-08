import React from "react";
import styled from "styled-components";
import {
  Link
} from "react-router-dom";

const Container = styled.div`
  flex: 7;
  padding: 10px 20px 10px 20px;
`;

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const TR = styled.tr`
  &:nth-child(even){
    background-color: #f2f2f2;
  }
  &:hover{
    background-color: #ddd;
  }
`;

const TH = styled.th`
  text-align: left;
  background-color: #04AA6D;
  color: white;
  border: 1px solid #ddd;
  padding: 12px 8px 12px 8px;
`;

const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  background: red;
`;

class UserListPageComponent extends React.Component
{

  render()
  {
    return(
      <Container>
        <Table>
          <thead>
            <TR>
              <TH>Username</TH>
              <TH>Email</TH>
              <TH>Is Admin</TH>
              <TH>Edit</TH>
              <TH>Delete</TH>
            </TR>
          </thead>
          <tbody>
            <TR>
              <TD></TD>
              <TD></TD>
              <TD></TD>
              <TD></TD>
              <TD></TD>
            </TR>
          </tbody>
          <tfoot>
            <TR>
              <TH colSpan={5}>
                <Link to="/user-add" className="link">
                  <Button>Add User</Button>
                </Link>
              </TH>
            </TR>
          </tfoot>
        </Table>
      </Container>
    );
  }
}

export default UserListPageComponent;