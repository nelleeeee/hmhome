import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";

function EventsContent({ match }) {
  const { id } = match.params;
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    db.collection("content")
      .doc(id)
      .get()
      .then(doc => {
        setEventData(doc.data());
      });
  }, []);
  return (
    <EventsContentContainer>
      <EventsContentImage src={`${eventData.fileUrl}}`} />
      <EventsContentTitle>{`${eventData.title}`}</EventsContentTitle>

      <EventsContentDetail>
        <EventsContentDetailInfo
          dangerouslySetInnerHTML={{ __html: eventData.content }}
        />
      </EventsContentDetail>
    </EventsContentContainer>
  );
}

export default EventsContent;

const EventsContentContainer = styled.div`
  width: 70%;
  min-width: 650px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const EventsContentImage = styled.img`
  background-size: cover;
  width: 100%;
  margin-bottom: 20px;
`;

const EventsContentTitle = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 800;
`;

const EventsContentDetail = styled.div`
  margin-bottom: 20px;
`;

const EventsContentDetailInfo = styled.div`
  margin-bottom: 20px;
  br {
    margin-bottom: 3px;
  }
`;
