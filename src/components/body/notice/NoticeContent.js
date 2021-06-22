import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";

function NoticeContent({ match }) {
  const makeDate = () => {
    var date = new Date(viewData?.createdAt?.seconds * 1000);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).substr(-2);
    var day = ("0" + date.getDate()).substr(-2);
    var d = year + "-" + month + "-" + day + " ";
    return d;
  };

  const [viewData, setViewData] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    db.collection("content")
      .doc(id)
      .get()
      .then(doc => {
        setViewData(doc.data());
      });
  }, []);
  return (
    <NoticeContentContainer>
      <NoticeTitle>お知らせ</NoticeTitle>

      <NoticeRowContainer>
        <NoticeRowTitle>{viewData?.title}</NoticeRowTitle>
        <NoticeRowDate>
          {"date  : "}
          {makeDate()}
        </NoticeRowDate>
      </NoticeRowContainer>
      <NoticeRowImage src={viewData?.fileUrl} />
      <NoticeText dangerouslySetInnerHTML={{ __html: viewData?.content }} />
    </NoticeContentContainer>
  );
}

export default NoticeContent;

const NoticeContentContainer = styled.div`
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

const NoticeText = styled.div``;

const NoticeRowContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 7px;
  border-bottom: 1px solid lightgray;
`;
const NoticeRowTitle = styled.div`
  align-items: center;
  width: 80%;
`;
const NoticeRowDate = styled.div`
  width: 20%;
  text-align: center;
  font-size: smaller;
`;

const NoticeRowImage = styled.img`
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`;
