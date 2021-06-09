import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <HeaderTitle>🎆 KPOP代行 SISTERKPOPへようこそ 🎆</HeaderTitle>
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
        <HeaderMenu6>会社概要</HeaderMenu6>
      </HeaderMenus>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 14vh;
  background-color: #ba55d3;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: larger;
  font-weight: bold;
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
  padding: 6px;
  :hover {
    background-color: #8b008b;
    border-radius: 50px;
    cursor: pointer;
  }
`;
const HeaderMenu2 = styled.div`
  /* width: 13%; */
  padding: 6px;
  :hover {
    background-color: #8b008b;
    border-radius: 50px;
    cursor: pointer;
  }
`;
const HeaderMenu3 = styled.div`
  /* width: 13%; */
  font-size: small;
  padding: 6px;
  :hover {
    background-color: #8b008b;
    border-radius: 50px;
    cursor: pointer;
  }
`;
const HeaderMenu4 = styled.div`
  /* width: 13%; */
  padding: 6px;
  :hover {
    background-color: #8b008b;
    border-radius: 50px;
    cursor: pointer;
  }
`;
const HeaderMenu5 = styled.div`
  /* width: 13%; */
  padding: 6px;
  :hover {
    background-color: #8b008b;
    border-radius: 50px;
    cursor: pointer;
  }
`;
const HeaderMenu6 = styled.div`
  /* width: 13%; */
  padding: 6px;

  :hover {
    background-color: #8b008b;
    border-radius: 50px;
    cursor: pointer;
  }
`;
