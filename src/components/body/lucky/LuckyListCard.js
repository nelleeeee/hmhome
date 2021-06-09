import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LuckyListCard() {
  return (
    <Link
      to="/EventsContent"
      style={{ textDecoration: "none", color: "black" }}
    >
      <LuckyListCardContainer>
        <LuckyListCardTitle>
          韓国SOUNDWAVE 【MONSTA X《ONE OF A KIND》】ラキドロ購入イベント
        </LuckyListCardTitle>

        <LuckyListCardContent>
          <LuckyListCardImage src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/11/10/658470b2-1988-11eb-8f67-a484f6db61a1_image_hires_150327.jpeg?itok=as2q_gxx&v=1604991813" />
          <LuckyListCardDetail>
            韓国サイト【TXT《FREEZE》】で行われる購入イベントの購入代行をいたします。
            数量限りの購入イベントで … 続きを読む
          </LuckyListCardDetail>
        </LuckyListCardContent>
      </LuckyListCardContainer>
    </Link>
  );
}

export default LuckyListCard;

const LuckyListCardContainer = styled.div`
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

const LuckyListCardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LuckyListCardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
`;
const LuckyListCardImage = styled.img`
  height: 70%;
  padding: 5px;
`;
const LuckyListCardDetail = styled.div`
  margin-left: 15px;
  padding: 5px;
`;
