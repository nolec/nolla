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
  padding: 50px 0;
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
  width: 500px;
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
    margin-top: 10px;

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
  flex-direction: column;
  justify-content: space-around;
`;
const Input = styled.input`
  margin-bottom: 10px;
`;

const Submit = styled.input`
  all: unset;
  cursor: pointer;
  left: 0;
  left: 50%;
  transform: translate(-50%);
`;
const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const ProfileFormPresenter = ({
  displaySocialInputs,
  toggleSocialInputs,
  handleSubmit,
  handleChange,
  ...formData
}) => {
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
                <Select
                  name="status"
                  value={formData.status}
                  onChange={e => handleChange(e)}
                >
                  <option value="0">* 선택하여 주세요</option>
                  <option value="Developer">개발자</option>
                  <option value="Junior Developer">초급 개발자</option>
                  <option value="Senior Developer">중급 개발자</option>
                  <option value="Manager">매니저</option>
                  <option value="Student or Learning">공부중</option>
                  <option value="Instructor">지도자</option>
                  <option value="Intern">인턴</option>
                  <option value="Other">기타</option>
                </Select>
                <small className="form-text">현재 숙련도</small>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="text"
                  name="company"
                  placeholder="회사"
                  value={formData.company}
                  onChange={e => handleChange(e)}
                  required
                />
                <small className="form-text">
                  현재 일하고 있는 회사를 적어주세요.
                </small>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="text"
                  name="website"
                  placeholder="웹사이트"
                  value={formData.website}
                  onChange={e => handleChange(e)}
                  required
                />
                <small className="form-text">
                  현재 일하고 있는 회사의 사이트를 적어주세요.
                </small>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="text"
                  name="location"
                  placeholder="지역"
                  value={formData.location}
                  onChange={e => handleChange(e)}
                  required
                />
                <small className="form-text">
                  현재 살고있는 지역을 적어주세요.
                </small>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="text"
                  name="skills"
                  placeholder="* 스킬"
                  value={formData.skills}
                  onChange={e => handleChange(e)}
                  required
                />
                <small className="form-text">
                  콤마로 구분해서 적어주세요. (ex : html, css,)
                </small>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  className="form-control"
                  type="text"
                  name="githubusername"
                  placeholder="Github 이름"
                  value={formData.githubusername}
                  onChange={e => handleChange(e)}
                  required
                />
                <small className="form-text">
                  깃허브 계정이 있다면 적어주세요.
                </small>
              </FormGroup>
              <FormGroup className="form-group">
                <textarea
                  className="form-control"
                  type="text"
                  name="bio"
                  placeholder="소개"
                  value={formData.bio}
                  onChange={e => handleChange(e)}
                />
                <small className="form-text">
                  자신에 대한 소개를 해주세요.
                </small>
              </FormGroup>
              <FormGroup>
                <button
                  onClick={() => toggleSocialInputs(!displaySocialInputs)}
                  type="button"
                  className="btn btn-light"
                >
                  SNS 링크 추가
                </button>
              </FormGroup>
              {displaySocialInputs && (
                <>
                  <FormGroup>
                    <i className="fab fa-youtube fa-2x" />
                    <Input
                      type="text"
                      placeholder="YouTube URL"
                      name="youtube"
                      value={formData.youtube}
                      onChange={e => handleChange(e)}
                    />
                  </FormGroup>
                </>
              )}
              <FormGroup className="last-form">
                <Submit
                  type="submit"
                  value="프로필 등록"
                  onClick={e => handleSubmit(e)}
                />
              </FormGroup>
            </Form>
          </LoginBox>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default ProfileFormPresenter;
