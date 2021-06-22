import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import Share from "../../hooks/Share";

function LuckyContent({ match }) {
  const { id } = match.params;
  const [luckyData, setLuckyData] = useState([]);

  useEffect(() => {
    db.collection("content")
      .doc(id)
      .get()
      .then(doc => {
        setLuckyData(doc.data());
      });
  }, []);
  return (
    <LuckyContentContainer>
      <LuckyContentImage src={`${luckyData?.fileUrl}}`} />
      <LuckyContentTitle>{`${luckyData?.title}`}</LuckyContentTitle>

      <LuckyContentDetail>
        <LuckyContentDetailInfo
          dangerouslySetInnerHTML={{ __html: luckyData?.content }}
        />
      </LuckyContentDetail>
      <Share />
    </LuckyContentContainer>
  );
}

export default LuckyContent;

const LuckyContentContainer = styled.div`
  width: 70%;
  min-width: 650px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LuckyContentImage = styled.img`
  background-size: cover;
  width: 100%;
  margin-bottom: 20px;
`;

const LuckyContentTitle = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 800;
`;

const LuckyContentDetail = styled.div`
  margin-bottom: 20px;
`;

const LuckyContentDetailInfo = styled.div`
  margin-bottom: 20px;
  br {
    margin-bottom: 3px;
  }
`;
