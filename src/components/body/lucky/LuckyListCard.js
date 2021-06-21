import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LuckyListCard({ id, title, content, fileUrl }) {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " . . ." : string;
  };
  return (
    <Link
      to={`/EventsContent/${id}`}
      style={{
        textDecoration: "none",
        color: "black",
        display: "flex",
        flexGrow: "1",
        flex: "50%",
        margin: "0px auto",
        height: "100%",
      }}
    >
      <LuckyListCardContainer>
        <LuckyListCardTitle>{`${title}`} </LuckyListCardTitle>

        <LuckyListCardContent>
          <LuckyListCardImage src={`${fileUrl}`} />
          <hr />
          <LuckyListCardDetail
            dangerouslySetInnerHTML={{ __html: truncate(content, 500) }}
          />
        </LuckyListCardContent>
      </LuckyListCardContainer>
    </Link>
  );
}

export default LuckyListCard;

const LuckyListCardContainer = styled.div`
  width: 70%;
  flex-direction: column;
  align-items: center;
  border: 1px solid gainsboro;
  margin-top: 20px;
  margin-bottom: 100px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: "RocknRoll One", sans-serif;
  margin: 20px;
  display: flex;

  :hover {
    cursor: pointer;
  }
  hr {
    color: lightgray;
    width: 30%;
    margin: auto;
    margin-top: 30px;
    border: none;
    border-top: 1px solid grey;
  }
`;

const LuckyListCardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LuckyListCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 20px;
  margin-top: 20px;
  color: #212121;
`;
const LuckyListCardImage = styled.img`
  height: 75%;
  width: 95%;
  margin: auto;
  margin-top: -10px;
  transition: all 0.3s ease-in-out 0.1s;
  border-radius: 3px;
  :hover {
    height: 80%;
    width: 100%;
  }
`;
const LuckyListCardDetail = styled.div`
  font-size: 14px;
  margin: auto;
  padding: 30px;
  color: gray;
`;
