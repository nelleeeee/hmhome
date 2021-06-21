import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ContentCard() {
  return (
    <Link
      to="/EventsContent"
      style={{ textDecoration: "none", color: "black" }}
    >
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
  height: 300px;
  width: 200px;
  /* width: 5%; */
  margin: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gainsboro;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

const ContentCardContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const ContentCardTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`;
const ContentCardImage = styled.img`
  height: 60%;
`;
const ContentCardDetail = styled.div`
  margin-left: 15px;
  padding: 5px;
  font-size: 13px;
`;
