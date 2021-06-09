import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function FanSignListCard() {
  return (
    <Link
      to="/EventsContent"
      style={{ textDecoration: "none", color: "black" }}
    >
      <FanSignListCardContainer>
        <FanSignListCardTitle>
          韓国SOUNDWAVE 【MONSTA X《ONE OF A KIND》】ラキドロ購入イベント
        </FanSignListCardTitle>

        <FanSignListCardContent>
          <FanSignListCardImage src="https://img.hankyung.com/photo/201911/2019111515332948327-540x360.jpg" />
          <FanSignListCardDetail>
            韓国サイト【TXT《FREEZE》】で行われる購入イベントの購入代行をいたします。
            数量限りの購入イベントで … 続きを読む
          </FanSignListCardDetail>
        </FanSignListCardContent>
      </FanSignListCardContainer>
    </Link>
  );
}

export default FanSignListCard;

const FanSignListCardContainer = styled.div`
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

const FanSignListCardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FanSignListCardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`;
const FanSignListCardImage = styled.img`
  height: 70%;
  padding: 5px;
`;
const FanSignListCardDetail = styled.div`
  margin-left: 15px;
  padding: 5px;
`;
