import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: #fdf7ff;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Wrapper = styled.section`
  padding: 50px 0;
`;
const ProfileBox = styled.div`
  padding: 20px;
  background-color: #fff;
  width: 60%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid;
  border-radius: 120px;
  margin: auto;
`;
const DetailPresenter = () => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <ProfileBox>
            <Avatar></Avatar>
          </ProfileBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default DetailPresenter;
