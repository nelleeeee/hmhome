import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EventSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        <EventContainer>
          <EventImage src="http://dailymedi.com//wys2/file_attach/2020/10/15/1602726389-49.jpeg"></EventImage>
          <Askndaskf>
            【MONSTA X《ONE OF A KIND》】ラキドロ購入イベント
          </Askndaskf>
        </EventContainer>
        <EventContainer>
          <EventImage src="https://img.hankyung.com/photo/201911/2019111515332948327-540x360.jpg"></EventImage>
          <Askndaskf>
            【MONSTA X《ONE OF A KIND》】ラキドロ購入イベント
          </Askndaskf>
        </EventContainer>
      </Slider>
    </Wrap>
  );
}

export default EventSlider;

const Wrap = styled.div`
  margin: 5% auto;
  width: 70%;
  min-width: 650px;

  .slick-prev {
    z-index: 1 !important;
  }
  .slick-next {
    z-index: 1 !important;
  }
  .slick-prev:before {
    position: absolute;
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: white; // 버튼 색은 검은색으로
    left: 35px !important;
    font-size: 50px !important;
  }
  .slick-next:before {
    position: absolute;

    opacity: 1;
    color: white;
    right: 35px !important;
    font-size: 50px !important;
  }
`;

const EventContainer = styled.div`
  background-color: gray;
  /* height: 40%; */
  width: 70%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 0;
  z-index: 0 !important;
  position: relative !important;
`;

const EventImage = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 0 !important;

  /* position: absolute !important; */
`;

const Askndaskf = styled.label`
  color: #fff;
  padding: 20px;
  position: absolute;
  left: 0px;
  font-size: 1.5em;
  bottom: 0px;
  width: 100%;
  z-index: 2;
  text-align: center;
`;
