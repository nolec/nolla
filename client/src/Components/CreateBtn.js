import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonBox = styled.div`
  width: 100px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  border-radius: 100px;
  background-color: yellow;
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 100%;
`;

const CreateBtn = () => {
  return (
    <ButtonBox>
      <Button to="/create-profile">프로필 생성</Button>
    </ButtonBox>
  );
};

export default CreateBtn;
