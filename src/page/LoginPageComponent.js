import React from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess
} from "../redux/userSlice";

const Container = styled.div`
  background: linear-gradient(45deg,  rgba(66, 183, 245,0.8) 0%,rgba(66, 245, 189,0.4) 100%);
  color: rgba(#000000, 0.6);
  font-size: 14px;
  line-height: 1.6em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  z-index: 15;
  position: relative;
  background: #ffffff;
  width: 25%;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid gray;
  padding: 0 0 10px 0;
  font-family: inherit;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  outline: none;
  display: block;
  background: rgba(0,0,0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: grey;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
  
  &:focus{
    color: #333333;
  }
`;

const Label = styled.label`
  font-variant: small-caps;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin: 5px 0 5px 0;
`;

const Button = styled.button`
  outline: none;
  background: #4285F4;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #ffffff;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px 0 0 0;
  transition: all 1.5s ease;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  
  &:hover{
    font-weight: bolder;
    background-color: green;
  }
`;

const Link = styled.a`
  margin: 15px 0 0 0;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  &:hover{
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Error = styled.div`
  background-color: orangered;
  border: 1px solid red;
  border-radius: 4px;
  color: white;
  padding: 5px 5px 5px 10px;
  margin: 10px 0 0 0;
  font-size: 16px;
`;

/**
 * LoginPageComponent
 */
class LoginPageComponent extends React.Component
{
  /**
   * constructor
   * @param props
   */
  constructor(props)
  {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  /**
   * handleSubmit
   * @param event
   * @returns {Promise<void>}
   */
  async handleSubmit(event)
  {
    try
    {
      event.preventDefault();
      this.props.loginStart();
      let username = this.state.username;
      let password = this.state.password;
      let data = await axios.post(
        "http://127.0.0.1:5000/api/users/login",
        {
          username,
          password
        }
      );
      this.props.loginSuccess(data.data.user);
    } catch(error)
    {
      this.props.loginFailure();
      this.setState({
        error: error.response.data.error
      });
      setTimeout(() => {
        this.setState({error: ""});
      },5000);
    }
  }

  /**
   * render
   * @returns {JSX.Element}
   */
  render()
  {
    return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          {this.state.error !== "" ? <Error><strong>Error</strong>: {this.state.error}</Error> : ""}
          <Form>
            <Label>username</Label>
            <Input
              onChange={e => this.setState({username: e.target.value})}
            />
            <Label>password</Label>
            <Input
              type="password"
              onChange={e => this.setState({password: e.target.value})}
            />
            <Button
              onClick={e => { this.handleSubmit(e) }}
            >LOGIN</Button>
            <Link to="\forgot-password">Forgot Password?</Link>
          </Form>
        </Wrapper>
      </Container>
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
  {
    loginStart,
    loginSuccess,
    loginFailure
  }
)(LoginPageComponent);