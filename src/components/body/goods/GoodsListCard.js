import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function GoodsListCard() {
  return (
    <Link
      to="/EventsContent"
      style={{ textDecoration: "none", color: "black" }}
    >
      <GoodsListCardContainer>
        <GoodsListCardTitle>
          韓国SOUNDWAVE 【MONSTA X《ONE OF A KIND》】ラキドロ購入イベント
        </GoodsListCardTitle>

        <GoodsListCardContent>
          <GoodsListCardImage src="http://www.newstap.co.kr/news/photo/202011/122792_203430_1117.jpg" />
          <GoodsListCardDetail>
            韓国サイト【TXT《FREEZE》】で行われる購入イベントの購入代行をいたします。
            数量限りの購入イベントで … 続きを読む
          </GoodsListCardDetail>
        </GoodsListCardContent>
      </GoodsListCardContainer>
    </Link>
  );
}

export default GoodsListCard;

const GoodsListCardContainer = styled.div`
  height: 600px;
  width: 60%;
  margin: auto;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid lightgray;
  margin-top: 20px;
  margin-bottom: 30px;
  min-width: 550px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;

const GoodsListCardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GoodsListCardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`;
const GoodsListCardImage = styled.img`
  height: 70%;
  padding: 5px;
`;
const GoodsListCardDetail = styled.div`
  margin-left: 15px;
  padding: 5px;
`;
