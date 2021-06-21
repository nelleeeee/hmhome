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
      <InfoMapContainer id="myMap"></InfoMapContainer>
      <InfoLocaContainer>
        <br />
        {"SISTERKPOP店舗案内"}
        <hr />
      </InfoLocaContainer>
      <InfoTimeContainer>
        <TitleC>​{"🏢 所在地"}</TitleC>
        <br />
        {"101, 1F, 8, Seongmisan-ro 26-gil, Mapo-gu, Seoul"}
        <br />
        {"ソウル特別市 麻浦区 ソンミサンロ26街 8 (올인빌라) 101号"}​
        <br />
        <br />
        <TitleC>{"☎ 連絡先"}</TitleC>
        <br />
        {"LINE ID: sisterkpop"}
        <br />
        {"カカオトークID : sisterkpop"}
        <br />​{"Email : hmsisterkpop@gmail.com "}
      </InfoTimeContainer>
    </InfoContainer>
  );
}

export default Info;

const InfoContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  height: 1000px;
`;

const InfoMapContainer = styled.div`
  width: 500px;
  height: 500px;
`;

const InfoLocaContainer = styled.div`
  padding-top: 20px;
  margin: auto;
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 20px;

  hr {
    margin-top: 40px;
  }
`;

const TitleC = styled.div`
  font-size: x-large;
  font-weight: 600;
  margin-top: 40px;
`;

const InfoTimeContainer = styled.div`
  margin: auto;
  text-align: center;
`;
