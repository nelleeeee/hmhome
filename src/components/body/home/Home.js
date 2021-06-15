import React from "react";
import styled from "styled-components";
import ContentCard from "../fansign/ContentCard";
import EventSlider from "../fansign/EventSlider";

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
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
