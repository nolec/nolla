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
const ProfileBox = styled.div`
  padding: 10px;
`;
const GridBox = styled.div`
  height: 200vh;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  grid-template-rows: 250px repeat(auto-fill, 250px);
  grid-gap: 10px;
  > div:first-child,
  > div:nth-child(2) {
    grid-column: span 2;
  }
`;
const List = styled.div`
  /* background: linear-gradient(90deg, #ffe1ff, #69d3ff, #ffd1d1); */
  background-color: #a27bff;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 16px;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
  div:nth-child(2) {
    padding: 10px 0 10px 0;
    font-size: 16px;
    text-align: center;
  }
`;
const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin: 10px auto;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
`;
const ProfilePresenter = ({ profiles }) => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <ProfileBox>
            <GridBox>
              {profiles.map(profile => (
                <List key={profile._id}>
                  <a href="#">
                    <ImgBox>
                      <Img src={profile.user.avatar} />
                    </ImgBox>
                    <div>
                      <h4>이름 : {profile.user.name}</h4>
                      <p>
                        대표 스킬 :{" "}
                        {profile.skills.map((skill, i) => (
                          <span key={i}>
                            {i === profile.skills.length - 1
                              ? skill
                              : `${skill}, `}
                          </span>
                        ))}
                      </p>
                    </div>
                  </a>
                </List>
              ))}
            </GridBox>
          </ProfileBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default ProfilePresenter;
