import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <NoticeContainer>
        <NoticeContainerText>
          {"リアルタイム"}
          <br />
          {"告知・お知らせ"}
        </NoticeContainerText>
        <NoticeContainerLogo
          onClick={() =>
            window.open("https://twitter.com/sisterKPOP1 ", "_blank")
          }
          src="https://mblogthumb-phinf.pstatic.net/MjAxODA5MjhfMTU4/MDAxNTM4MTIxMDM1NjEz.y_vypYsX9eNReCcIklqgl_UB2IKe_vVM_uYdSE-o2log.XClSScgwlU1PtY2b9iWQINVhHNrYReHaC9gYav-IWjgg.PNG.dnduf75/%EB%A1%9C%EA%B3%A0%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%ED%8A%B8%EC%9C%84%ED%84%B0%EB%A1%9C%EA%B3%A0-png-3.png?type=w800"
        />
      </NoticeContainer>
      <CsContainer>
        <CsContainerText>{"お問合せ"}</CsContainerText>
        <CsContainerLine src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/KakaoTalk_Photo_2021-06-05-16-50-51.jpeg?alt=media&token=542eb021-c669-4545-92a7-67fe2e951d30" />
        <CsContainerKakao src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/KakaoTalk_Photo_2021-06-05-16-51-02.jpeg?alt=media&token=b24c3770-d48f-4cad-89a3-7ab7754fb870" />
        <CsContainerId> ID : sisterkpop</CsContainerId>
      </CsContainer>
      <EventContainer>
        <EventContainerText>
          {"イベント"}
          <br />
          {"申し込みフォーム"}
        </EventContainerText>

        <EventContainerLogo
          src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/pngaaa.com-4114571.png?alt=media&token=3de313bb-046e-417e-91e5-472ee86b86a4"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSck87c8Zp0tAU6T26vgvj_0shts6isXF64QbLSKpBo7euPvmQ/viewform",
              "_blank"
            )
          }
        />
      </EventContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 10%;
  min-width: 150px;
  /* height: 80vh; */
  background-color: #ffc800;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const NoticeContainerText = styled.div``;
const NoticeContainerLogo = styled.img`
  margin-top: 5px;
  height: 50px;
  :hover {
    cursor: pointer;
  }
`;

const CsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const CsContainerText = styled.div``;
const CsContainerLine = styled.img`
  height: 80px;
  margin-top: 5px;
`;
const CsContainerKakao = styled.img`
  height: 80px;
  margin-top: 5px;
`;
const CsContainerId = styled.div`
  font-size: smaller;
  margin-top: 3px;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const EventContainerText = styled.div``;
const EventContainerLogo = styled.img`
  height: 80px;
  margin-top: 5px;
  :hover {
    cursor: pointer;
  }
`;
