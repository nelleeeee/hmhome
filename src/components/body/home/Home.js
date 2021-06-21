import React from "react";
import styled from "styled-components";
import ContentCard from "./ContentCard";
import EventSlider from "./EventSlider";

function Home() {
  return (
    <HomeContainer>
      <>
        <EventSlider />
        <ContentCardContainer>
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </ContentCardContainer>
        {/* <ContentCard /> */}
      </>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;

const ContentCardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  overflow: scroll;

  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 8px;

    /* 가로 스크롤 높이 */
    height: 12px;

    border-radius: 6px;
    color: #212121;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
