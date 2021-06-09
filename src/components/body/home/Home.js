import React from "react";
import styled from "styled-components";
import ContentCard from "../fansign/ContentCard";
import EventSlider from "../fansign/EventSlider";

function Home() {
  return (
    <HomeContainer>
      <>
        <EventSlider />
        <ContentCard />
      </>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;
