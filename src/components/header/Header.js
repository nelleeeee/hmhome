import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <HeaderContainer>
      <TitleSearch>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <HeaderTitle
            src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/images%2Fnu.png?alt=media&token=eb92b98a-ee3a-4eee-b45e-698db61a3e15"
            style={{ height: "140px", marginTop: -10, marginBottom: -15 }}
          />
        </Link>
        <SearchContainer>
          <SearchIcon />
          <Search placeholder="検索する" />
        </SearchContainer>
      </TitleSearch>
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
  margin-bottom: 10px;
  font-family: "RocknRoll One", sans-serif;
`;
const TitleSearch = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.img`
  /* margin: 10px; */
`;

const SearchContainer = styled.div`
  height: 25px;
  width: 400px;
  border: none;
  border-radius: 30px;
  background-color: white;
  text-align: center;
  display: flex;
  padding: 10px 20px;
  color: gray;
  margin-top: 50px;
  margin-left: 150px;
  > input {
    outline: 0;
    margin-left: 10px;
    font-size: 15px;
  }
`;
const Search = styled.input`
  border: none;
  border-radius: 30px;
`;

const HeaderMenus = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  text-align: center;
  font-size: 20px;
`;

const HeaderMenu1 = styled.div`
  color: #222222;
  padding: 5px 20px 5px 20px;
  transition: all 0.8s ease;
  border-radius: 30px;
  :hover {
    background-color: #212121;
    color: white;
    cursor: pointer;
  }
`;
const HeaderMenu2 = styled.div`
  color: #222222;
  padding: 5px 20px 5px 20px;
  transition: all 0.8s ease;
  border-radius: 30px;
  :hover {
    background-color: #212121;
    color: white;
    cursor: pointer;
  }
`;
const HeaderMenu3 = styled.div`
  color: #222222;
  padding: 5px 20px 5px 20px;
  transition: all 0.8s ease;
  border-radius: 30px;
  :hover {
    background-color: #212121;
    color: white;
    cursor: pointer;
  }
`;
const HeaderMenu4 = styled.div`
  color: #222222;
  padding: 5px 20px 5px 20px;
  transition: all 0.8s ease;
  border-radius: 30px;
  :hover {
    background-color: #212121;
    color: white;
    cursor: pointer;
  }
`;
const HeaderMenu5 = styled.div`
  color: #222222;
  padding: 5px 20px 5px 20px;
  transition: all 0.8s ease;
  border-radius: 30px;
  :hover {
    background-color: #212121;
    color: white;
    cursor: pointer;
  }
`;
const HeaderMenu6 = styled.div`
  color: #222222;
  padding: 5px 20px 5px 20px;
  transition: all 0.8s ease;
  border-radius: 30px;
  :hover {
    background-color: #212121;
    color: white;
    cursor: pointer;
  }
`;
