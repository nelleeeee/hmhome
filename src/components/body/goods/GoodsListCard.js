import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../../firebase";
function GoodsListCard({ id, title, content, fileUrl, view }) {
  const viewUpdate = () => {
    db.collection("content")
      .doc(id)
      .update({
        view: view + 1,
      });
  };
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " . . ." : string;
  };
  return (
    <Link
      onClick={viewUpdate}
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
      <GoodsListCardTitle>{`${title}`} </GoodsListCardTitle>

      <GoodsListCardContent>
        <GoodsListCardImage src={`${fileUrl}`} />
        <GoodsListCardDetail
          dangerouslySetInnerHTML={{ __html: truncate(content, 500) }}
        />
      </GoodsListCardContent>
    </Link>
  );
}

export default GoodsListCard;

const GoodsListCardContent = styled.div`
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

const GoodsListCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 20px;
  margin-top: 20px;
  color: #212121;
`;
const GoodsListCardImage = styled.img`
  width: 95%;

  margin: -10px auto;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out 0.1s;
  border-radius: 3px;
  :hover {
    transform: scale(1);
  }
`;
const GoodsListCardDetail = styled.div`
  font-size: 14px;
  margin: auto;
  padding: 30px;
  color: gray;
`;
