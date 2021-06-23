import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";

function QnaContent({ match }) {
  const makeDate = () => {
    var date = new Date(qnaData?.createdAt?.seconds * 1000);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).substr(-2);
    var day = ("0" + date.getDate()).substr(-2);
    var d = year + "-" + month + "-" + day + " ";
    return d;
  };

  const [qnaData, setQnaData] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    db.collection("content")
      .doc(id)
      .get()
      .then(doc => {
        setQnaData(doc.data());
      });
  }, []);
  return (
    <QnaContentContainer>
      <QnaTitle>お知らせ</QnaTitle>

      <QnaRowContainer>
        <QnaRowTitle>{qnaData?.title}</QnaRowTitle>
        <QnaRowDate>
          {"date  : "}
          {makeDate()}
        </QnaRowDate>
      </QnaRowContainer>
      <QnaRowImage src={qnaData?.fileUrl} />
      <QnaText dangerouslySetInnerHTML={{ __html: qnaData?.content }} />
    </QnaContentContainer>
  );
}

export default QnaContent;

const QnaContentContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 70%;
`;

const QnaTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

const QnaText = styled.div``;

const QnaRowContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 7px;
  border-bottom: 1px solid lightgray;
`;
const QnaRowTitle = styled.div`
  align-items: center;
  width: 80%;
`;
const QnaRowDate = styled.div`
  width: 20%;
  text-align: center;
  font-size: smaller;
`;

const QnaRowImage = styled.img`
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`;
