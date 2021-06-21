import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function FanSignListCard({ id, title, content, fileUrl }) {
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
      <FanSignListCardContent>
        <FanSignListCardImage src={`${fileUrl}`} />
        <FanSignListCardTitle>{`${title}`} </FanSignListCardTitle>
        <hr />
        <FanSignListCardDetail
          dangerouslySetInnerHTML={{ __html: truncate(content, 500) }}
        />
      </FanSignListCardContent>
    </Link>
  );
}

export default FanSignListCard;

const FanSignListCardContent = styled.div`
  width: 70%;
  display: flex;
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
  :hover {
    cursor: pointer;
  }
  hr {
    color: lightgray;
    width: 30%;
    margin: auto;
    border: none;
    border-top: 1px solid grey;
  }
`;

const FanSignListCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 20px;
  margin-top: 20px;
  color: #212121;
`;
const FanSignListCardImage = styled.img`
  width: 95%;

  margin: -10px auto;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out 0.1s;
  border-radius: 3px;
  :hover {
    transform: scale(1.07);
  }
`;
const FanSignListCardDetail = styled.div`
  font-size: 14px;
  margin: auto;
  padding: 30px;
  color: gray;
`;
