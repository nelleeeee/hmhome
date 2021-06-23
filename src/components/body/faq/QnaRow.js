import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router";
import { db } from "../../../firebase";

function QnaRow({ id, title, createdAt, password }) {
  var date = new Date(createdAt * 1000);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).substr(-2);
  var day = ("0" + date.getDate()).substr(-2);
  var d = year + "-" + month + "-" + day + " ";

  const history = useHistory();

  const inputPassword = () => {
    let inputPass = prompt("Enter the password");
    if (password === inputPass) {
      history.push(`qna/${id}`);
    } else {
      alert("Wrong password");
    }
  };
  return (
    // <Link to={`/qna/${id}`} style={{ textDecoration: "none", color: "black" }}>
    <QnaRowContainer onClick={inputPassword}>
      {"[QNA]"}{" "}
      <QnaRowTitle>
        &nbsp;{title}
        &nbsp;
        <LockIcon style={{ fontSize: "18px" }} />
      </QnaRowTitle>
      <QnaRowDate>
        {"date  : "}
        {d}
      </QnaRowDate>
    </QnaRowContainer>
    // </Link>
  );
}

export default QnaRow;

const QnaRowContainer = styled.div`
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

const QnaRowTitle = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const QnaRowDate = styled.div`
  width: 30%;
  text-align: center;
  font-size: smaller;
`;
