import React from "react";
import styled from "styled-components";
import FanSignListCard from "./FanSignListCard";

function FanSignList() {
  return (
    <FanSignListContainer>
      <FanSignListCard />
      <FanSignListCard />
      <FanSignListCard />
      <FanSignListCard />
      <FanSignListCard />
      <FanSignListCard />
    </FanSignListContainer>
  );
}

export default FanSignList;

const FanSignListContainer = styled.div``;
