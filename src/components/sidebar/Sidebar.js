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
        <CsContainerLine src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/data%2FKakaoTalk_Photo_2021-06-09-22-59-56.jpeg?alt=media&token=dddfb050-d751-4767-9d4d-1f8c05c4e4df" />
        <CsContainerKakao src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/data%2FKakaoTalk_Photo_2021-06-09-22-59-48.jpeg?alt=media&token=8c2d0ea6-dc3a-4bc1-9fab-7df268db8e5b" />
        <CsContainerId> ID : sisterkpop</CsContainerId>
      </CsContainer>

      <Link to="/guide">
        <GuideContainer>
          <GuideImage src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/images%2Ff99221779f2194fbdd9f3a1c648eb304.jpeg?alt=media&token=8caf1889-5186-4296-8a8a-d13e6a355949" />
        </GuideContainer>
      </Link>

      <EventContainer>
        <EventContainerText>
          {"イベント"}
          <br />
          {"申し込みフォーム"}
        </EventContainerText>

        <EventContainerLogo
          src="https://firebasestorage.googleapis.com/v0/b/hmhome-30ed7.appspot.com/o/data%2Fpngaaa.com-4114571.png?alt=media&token=a02a78b3-0e7d-4556-8226-b80ddc93535e"
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
  min-height: 900px;
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

// 가이드 컨테이너
const GuideContainer = styled.div`
  margin-top: 10px;
`;

const GuideImage = styled.img`
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
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
