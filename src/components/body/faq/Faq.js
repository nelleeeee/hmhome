import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import QnaRow from "./QnaRow";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

function Faq() {
  const [qnaLists, setQnaLists] = useState([]);
  useEffect(() => {
    db.collection("content")
      .orderBy("createdAt", "desc")
      .where("category", "==", "QNA")
      .onSnapshot(snapshot => {
        setQnaLists(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [qnaLists]);
  return (
    <Container>
      <Title>お問い合わせ</Title>
      <Link
        to="/userwrite"
        style={{
          textDecoration: "none",
          color: "#212121",
        }}
      >
        <CreateIcon />
      </Link>

      {qnaLists?.map(
        ({
          id,
          data: { aut, createdAt, category, title, content, password },
        }) => (
          <QnaRow
            key={id}
            id={id}
            aut={aut}
            createdAt={createdAt.seconds}
            category={category}
            title={title}
            content={content}
            password={password}
          />
        )
      )}
    </Container>
  );
}

export default Faq;

const Container = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 70%;
`;

const Title = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;
