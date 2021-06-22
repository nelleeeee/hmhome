import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import GoodsListCard from "./GoodsListCard";

function GoodsList() {
  const [goodsLists, setGoodsLists] = useState([]);

  useEffect(() => {
    db.collection("content")
      .where("category", "==", "상품")
      .onSnapshot(snapshot => {
        setGoodsLists(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <GoodsListContainer>
      <GoodsListTitle>グッズ代行</GoodsListTitle>

      {goodsLists?.map(
        ({
          id,
          data: { aut, createdAt, category, title, content, fileUrl, view },
        }) => (
          <GoodsListCard
            key={id}
            id={id}
            aut={aut}
            createdAt={createdAt.seconds}
            category={category}
            title={title}
            content={content}
            fileUrl={fileUrl}
            view={view}
          />
        )
      )}
    </GoodsListContainer>
  );
}

export default GoodsList;

const GoodsListContainer = styled.div``;
const GoodsListTitle = styled.div`
  text-align: center;
  font-size: xx-large;
  font-weight: 800;
  margin-top: 40px;
  color: #212121;
  font-family: "RocknRoll One", sans-serif;
`;
