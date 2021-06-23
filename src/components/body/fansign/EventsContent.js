import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import Share from "../../hooks/Share";

function EventsContent({ match }) {
  const { id } = match.params;
  const [eventData, setEventData] = useState([]);
  const url = "EventsContent/" + id;
  useEffect(() => {
    db.collection("content")
      .doc(id)
      .get()
      .then(doc => {
        setEventData(doc.data());
      });
  }, [eventData]);

  return (
    <EventsContentContainer>
      <EventsContentImage src={`${eventData?.fileUrl}}`} />
      <EventsContentTitle>{`${eventData?.title}`}</EventsContentTitle>

      <EventsContentDetail>
        <EventsContentDetailInfo
          dangerouslySetInnerHTML={{ __html: eventData?.content }}
        />
        <Share url={url} title={eventData?.title} />
        <Hashes>
          {eventData?.hashTags?.map(hash => (
            <Hash>{hash}</Hash>
          ))}
        </Hashes>
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
  flex: 1;
`;

const EventsContentDetailInfo = styled.div`
  margin-bottom: 20px;
  br {
    margin-bottom: 3px;
  }
`;

const Hashes = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex: 0.5;
  flex-wrap: wrap;
`;
const Hash = styled.div`
  background-color: #ffe600a4;
  color: #444444;
  font-weight: 600;
  padding: 5px 15px 5px 15px;
  border-radius: 30px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #ffe600;
    color: #212121;
    transform: scale(1.05);
  }
`;
