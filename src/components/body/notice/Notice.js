import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeRow from "./NoticeRow";
import { db } from "../../../firebase";

function Notice() {
  const [contentLists, setContentLists] = useState([]);
  useEffect(() => {
    db.collection("content")
      .orderBy("createdAt", "desc")
      .where("category", "==", "공지사항")
      .onSnapshot(snapshot => {
        setContentLists(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <NoticeContainer>
      <NoticeTitle>お知らせ</NoticeTitle>
      {contentLists?.map(
        ({ id, data: { aut, createdAt, category, title, content } }) => (
          <NoticeRow
            key={id}
            id={id}
            aut={aut}
            createdAt={createdAt.seconds}
            category={category}
            title={title}
            content={content}
          />
        )
      )}
    </NoticeContainer>
  );
}

export default Notice;

const NoticeContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 70%;
`;

const NoticeTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;
