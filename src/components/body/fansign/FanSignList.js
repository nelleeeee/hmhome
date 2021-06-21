import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import FanSignListCard from "./FanSignListCard";

function FanSignList() {
  const [fanLists, setFanLists] = useState([]);

  useEffect(() => {
    db.collection("content")
      .where("category", "==", "펜사인회")
      .onSnapshot(snapshot => {
        setFanLists(
          snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <Container>
      <FanSignListTitle>サイン会代行</FanSignListTitle>
      <FanSignListContainer>
        {fanLists?.map(
          ({
            id,
            data: { aut, createdAt, category, title, content, fileUrl },
          }) => (
            <FanSignListCard
              key={id}
              id={id}
              aut={aut}
              createdAt={createdAt.seconds}
              category={category}
              title={title}
              content={content}
              fileUrl={fileUrl}
            />
          )
        )}
      </FanSignListContainer>
    </Container>
  );
}

export default FanSignList;

const Container = styled.div``;

const FanSignListTitle = styled.div`
  text-align: center;
  font-size: xx-large;
  font-weight: 800;
  margin-top: 40px;
  color: #212121;
  font-family: "RocknRoll One", sans-serif;
`;

const FanSignListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 100px;
  flex-grow: 1;
`;
