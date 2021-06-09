import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NoticeRow({ id, title, createdAt }) {
  var date = new Date(createdAt * 1000);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).substr(-2);
  var day = ("0" + date.getDate()).substr(-2);
  var d = year + "-" + month + "-" + day + " ";
  return (
    <Link
      to={`/noticecontent/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <NoticeRowContainer>
        <NoticeRowTitle>{title}</NoticeRowTitle>
        <NoticeRowDate>
          {"date  : "}
          {d}
        </NoticeRowDate>
      </NoticeRowContainer>
    </Link>
  );
}

export default NoticeRow;

const NoticeRowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 7px;
  border-bottom: 1px solid lightgray;
  :hover {
    transform: scale(1.01);
  }
`;

const NoticeRowTitle = styled.div`
  width: 70%;
`;

const NoticeRowDate = styled.div`
  width: 30%;
  text-align: center;
  font-size: smaller;
`;
