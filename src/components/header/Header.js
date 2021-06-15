import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <HeaderTitle
          src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/images%2FKakaoTalk_Photo_2021-06-15-15-42-32.jpeg?alt=media&token=ad6b6ba0-8534-49d2-a083-823106ce2261"
          style={{ height: "120px", marginTop: -10, marginBottom: 0 }}
        />
      </Link>
      <HeaderMenus>
        <Link to="/notice" style={{ textDecoration: "none", color: "white" }}>
          <HeaderMenu1>お知らせ</HeaderMenu1>
        </Link>

        <Link to="/fansign" style={{ textDecoration: "none", color: "white" }}>
          <HeaderMenu2>サイン会代行</HeaderMenu2>
        </Link>

        <Link to="/lucky" style={{ textDecoration: "none", color: "white" }}>
          <HeaderMenu3>ラッキードロー代行</HeaderMenu3>
        </Link>

        <Link to="/goods" style={{ textDecoration: "none", color: "white" }}>
          <HeaderMenu4>グッズ代行</HeaderMenu4>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none", color: "white" }}>
          <HeaderMenu5>お問合せ</HeaderMenu5>
        </Link>

        <Link to="/info" style={{ textDecoration: "none", color: "white" }}>
          <HeaderMenu6>アクセス案内</HeaderMenu6>
        </Link>
      </HeaderMenus>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 20vh;
  /* background-color: #ba55d3; */
  /* color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.img`
  margin: 20px;
`;

const HeaderMenus = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  text-align: center;
`;

const HeaderMenu1 = styled.div`
  /* width: 13%; */
  color: #222222;
  padding: 6px;
  :hover {
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const HeaderMenu2 = styled.div`
  /* width: 13%; */
  color: #222222;
  padding: 6px;
  :hover {
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const HeaderMenu3 = styled.div`
  /* width: 13%; */
  font-size: small;
  color: #222222;
  padding: 6px;
  :hover {
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const HeaderMenu4 = styled.div`
  /* width: 13%; */
  color: #222222;
  padding: 6px;
  :hover {
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const HeaderMenu5 = styled.div`
  /* width: 13%; */
  color: #222222;
  padding: 6px;
  :hover {
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const HeaderMenu6 = styled.div`
  /* width: 13%; */
  color: #222222;
  padding: 6px;
  :hover {
    background-color: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
