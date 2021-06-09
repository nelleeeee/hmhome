import React from "react";
import styled from "styled-components";

function Notice() {
  return (
    <NoticeContainer>
      <NoticeTitle>お知らせ</NoticeTitle>
      <NoticeContent>내용내용내용내용내용내용내용내용</NoticeContent>
      <NoticeContent>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </NoticeContent>
      <NoticeContent>내용내용내용내용내용내용내용내용</NoticeContent>
      <NoticeContent>내용내용내용내용내용내용내용내용내용내용</NoticeContent>
      <NoticeContent>내용내용내용내용내용내용내용내용</NoticeContent>
      <NoticeContent>
        내용내용내용내용내용내용내용내용내용내용내용내용
      </NoticeContent>
    </NoticeContainer>
  );
}

export default Notice;

const NoticeContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  border: 1px solid lightgray;
`;

const NoticeTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

const NoticeContent = styled.div`
  font-size: 15px;
  /* margin-bottom: 5px; */
  /* border-top: 1px solid lightgray; */
  /* border-bottom: 1px solid lightgray; */
  padding: 5px;
`;
