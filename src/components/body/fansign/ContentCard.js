import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ContentCard() {
  return (
    <Link to="/fansign" style={{ textDecoration: "none", color: "black" }}>
      <ContentCardContainer>
        <ContentCardTitle>
          韓国SOUNDWAVE 【MONSTA X《ONE OF A KIND》】ラキドロ購入イベント
        </ContentCardTitle>

        <ContentCardContent>
          <ContentCardImage src="https://img.hankyung.com/photo/201911/2019111515332948327-540x360.jpg" />
          <ContentCardDetail>
            韓国サイト【TXT《FREEZE》】で行われる購入イベントの購入代行をいたします。
            数量限りの購入イベントで … 続きを読む
          </ContentCardDetail>
        </ContentCardContent>
      </ContentCardContainer>
    </Link>
  );
}

export default ContentCard;

const ContentCardContainer = styled.div`
  height: 200px;
  width: 70%;
  margin: auto;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid lightgray;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 650px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  :hover {
    cursor: pointer;
  }
`;

const ContentCardContent = styled.div`
  height: 100%;
  display: flex;
`;

const ContentCardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`;
const ContentCardImage = styled.img`
  height: 80%;
`;
const ContentCardDetail = styled.div`
  margin-left: 15px;
  padding: 5px;
`;
