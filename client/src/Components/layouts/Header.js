import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import CreateBtn from "../CreateBtn";

const Header = styled.header`
  padding: 40px 0 30px 0;
  background-color: #c400c4;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  display: flex;
`;
const LogoBox = styled.div`
  display: flex;
`;
const Logo = styled(Link)`
  font-size: 24px;
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 2px;
`;
const NavBar = styled.div`
  width: 100%;
  max-height: 340px;
  ul {
    display: flex;
    justify-content: flex-end;
  }
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  a {
    color: ${props => (props.current ? "#000" : "#fff")};
  }
`;
const Item = styled(Link)`
  padding: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 16px;
  transition: 0.1s linear;
  &:hover {
    color: #000;
  }
`;
const AuthBar = styled.div`
  ul {
    display: flex;
  }
  li:not(:last-child) {
    margin-left: 10px;
    margin-right: 10px;
  }
  a {
    padding: 15px 0;
  }
`;
export default withRouter(({ location: { pathname } }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile);
  console.log(auth);
  return (
    <Header>
      <Container>
        <LogoBox>
          <Logo to="/">Nolla</Logo>
        </LogoBox>
        <NavBar>
          <ul>
            <Li current={pathname === "/talent"}>
              <Item to="/talent">능력자</Item>
            </Li>
            <Li current={pathname === "/profile"}>
              <Item to="/profile">프로필</Item>
            </Li>
          </ul>
        </NavBar>
        <AuthBar>
          {auth.loading ? null : (
            <>
              {auth.isAuthenticated && auth.isAuthenticated ? (
                <>
                  <ul>
                    <Li>
                      <Item to="/" onClick={() => dispatch(logout())}>
                        로그아웃
                      </Item>
                    </Li>
                  </ul>
                </>
              ) : (
                <>
                  <ul>
                    <Li>
                      <Item to="/login">로그인</Item>
                    </Li>
                    <Li>
                      <Item to="/register">회원가입</Item>
                    </Li>
                  </ul>
                </>
              )}
            </>
          )}
        </AuthBar>
      </Container>
      {auth.isAuthenticated && pathname !== "/create-profile" ? (
        <CreateBtn profile={profile} />
      ) : null}
    </Header>
  );
});
