import React from "react";
import styled from "styled-components";
import GoodsListCard from "./GoodsListCard";

function GoodsList() {
  return (
    <GoodsListContainer>
      <GoodsListCard />
      <GoodsListCard />
      <GoodsListCard />
      <GoodsListCard />
      <GoodsListCard />
      <GoodsListCard />
    </GoodsListContainer>
  );
}

export default GoodsList;

const GoodsListContainer = styled.div``;
