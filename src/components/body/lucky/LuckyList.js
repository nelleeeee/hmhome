import React from "react";
import styled from "styled-components";
import LuckyListCard from "./LuckyListCard";

function LuckyList() {
  return (
    <LuckyListContainer>
      <LuckyListCard />
      <LuckyListCard />
      <LuckyListCard />
      <LuckyListCard />
      <LuckyListCard />
      <LuckyListCard />
    </LuckyListContainer>
  );
}

export default LuckyList;

const LuckyListContainer = styled.div``;
