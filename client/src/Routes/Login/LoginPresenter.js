import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect } from "react-router-dom";

const Main = styled.main`
  background-color: #fdf7ff;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Wrapper = styled.section`
  padding: 100px 0;
`;
const Hbox = styled.div`
  width: 100%;
  padding: 10px 35px;
`;
const Hlink = styled(Link)`
  width: 100%;
  height: 100%;
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 10px;
  color: #c400c4;
  :hover {
    color: #c400c4;
  }
`;
const LoginBox = styled.div`
  width: 50%;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  padding: 50px 60px 50px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;
const animate = keyframes`{
  0% {
    background-position : 0%
  }
  100%{
    background-position : 400%
  }
}`;
const Form = styled.form`
  padding: 20px 0 0 0;
  .last-form {
    padding-top: 20px;
    width: 100%;
    height: 60px;
    position: relative;
    * {
      width: 120px;
      height: 40px;
      text-align: center;
      position: absolute;
      top: 0%;
      color: #fff;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #c400c4, #03a9f4);
      background-size: 400%;
      border-radius: 20px;
      :hover {
        animation: ${animate} 8s linear infinite;
      }
    }
  }
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Input = styled.input`
  margin-bottom: 10px;
`;

const Submit = styled.input`
  all: unset;
  cursor: pointer;
  left: 0;
`;
const Signup = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
`;

const LoginPresenter = ({ handleSubmit, handleChange, ...formData }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <LoginBox>
            <Hbox>
              <Hlink to="/">NOLLA</Hlink>
            </Hbox>
            <Form className="simple-login-container">
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={e => handleChange(e)}
                  required
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={e => handleChange(e)}
                  minLength="6"
                  required
                />
              </FormGroup>
              <FormGroup className="last-form">
                <Submit
                  type="submit"
                  value="로그인"
                  onClick={e => handleSubmit(e)}
                />
                <Signup to="/register">회원등록</Signup>
              </FormGroup>
            </Form>
          </LoginBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default LoginPresenter;
