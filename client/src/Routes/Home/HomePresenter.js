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
  padding: 70px 0;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const Top = styled.div`
  p {
    font-size: 35px;
    margin-bottom: 30px;
    margin-top: 30px;
    font-weight: 700;
  }
`;
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  margin: auto;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: #f3d0ff;
  margin: auto;
  border-radius: 5px;
  padding: 40px 0;
  color: #4e4e4e;
  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 550;
  }
`;
const HomePresenter = ({ myProfile, time }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          {myProfile !== null ? (
            <ContentBox>
              <Top>
                <Avatar>
                  <img src={myProfile.user.avatar} />
                </Avatar>
                <p>{myProfile.user.name} 님 반갑습니다.</p>
              </Top>
              <div>
                <p>소속 회사 : {myProfile.company}</p>
              </div>
            </ContentBox>
          ) : null}
          <IntroBox>
            <h2>NOLLA에 오신 것을 환영합니다.</h2>
            <p>
              시간 <small className="clock">{time}</small>
            </p>
          </IntroBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default HomePresenter;
