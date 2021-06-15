import React, { useEffect } from "react";
import styled from "styled-components";

function Info() {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.563389715813, 126.92231700176),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.563389715813,
      126.92231700176
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);
  return (
    <InfoContainer>
      <InfoMapTitle>{"アクセス案内"}</InfoMapTitle>
      <InfoMapContainer id="myMap"></InfoMapContainer>
      <InfoLocaContainer>
        <br />
        {`[ アドレス ]`}
        <br />
        {`홍대입구역 9번 출구`}​{`ホンだいいりぐちえき[弘大入口駅]`}
        <br />
        {`Hongik Univ. Station Gate no.9`}
        <br />
        {`弘大入口駅(홍대입구역) 9番出口`}​
        <br />
        {`CDや公演チケットなどのお渡しなど事務所にて可能です。`}
      </InfoLocaContainer>
      <InfoTimeContainer>
        <br />
        {`[ 受け取り可能時間 ]`}
        <br />
        {`月~木 : 10時 ~ 12時 / 13時 ~ 17時`}
        <br />
        {`(休日 : 金~日、 韓国の休日)`}
        <br />​{`※ 金曜日はサイン会の応募者が多いのでお受け取り不可`}
        <br />​
        {`※ 到着日時を正確にお願いいたします。日時が合わない場合難しいです。`}
        <br />
        {`受け取り時間に関しましては`}
        <br />
        {`LINE : miskiblue`}
        ​ <br />
        {`こちらにご連絡お願いいたします。`}
        <br />
      </InfoTimeContainer>
    </InfoContainer>
  );
}

export default Info;

const InfoContainer = styled.div`
  margin: auto;
  margin-top: 50px;
`;

const InfoMapTitle = styled.div`
  margin: auto;
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 30px;
`;

const InfoMapContainer = styled.div`
  width: 500px;
  height: 500px;
`;

const InfoLocaContainer = styled.div`
  margin-top: 50px;
  margin: auto;
  text-align: center;
`;
const InfoTimeContainer = styled.div`
  margin-top: 50px;
  margin: auto;
  text-align: center;
`;
