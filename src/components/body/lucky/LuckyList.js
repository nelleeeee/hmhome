import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import LuckyListCard from "./LuckyListCard";

function LuckyList() {
  const [luckyLists, setLuckyLists] = useState([]);

  useEffect(() => {
    db.collection("content")
      .where("category", "==", "럭키드로우")
      .onSnapshot(snapshot => {
        setLuckyLists(
          snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <Container>
      <LuckyListTitle>ラッキードロー代行</LuckyListTitle>
      <LuckyListContainer>
        {luckyLists?.map(
          ({
            id,
            data: { aut, createdAt, category, title, content, fileUrl, view },
          }) => (
            <LuckyListCard
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
      </LuckyListContainer>
    </Container>
  );
}

export default LuckyList;

const Container = styled.div``;

const LuckyListTitle = styled.div`
  text-align: center;
  font-size: xx-large;
  font-weight: 800;
  margin-top: 40px;
  color: #212121;
  font-family: "RocknRoll One", sans-serif;
`;

const LuckyListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 100px;
  flex-grow: 1;
`;
