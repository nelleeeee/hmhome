import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../../firebase";
import Input from "@material-ui/core/Input";

function ImageUploader({ handleUrl, setDis }) {
  const [image, setImage] = useState(null);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setDis(false);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            handleUrl(url);
            setDis(true);
          });
      }
    );
  };
  return (
    <ImageUploaderContainer>
      <ImageUploaderInput type="file" onChange={handleChange} />
      <ImageUploaderButton variant="contained" onClick={handleUpload}>
        UPLOAD
      </ImageUploaderButton>
    </ImageUploaderContainer>
  );
}

export default ImageUploader;

const ImageUploaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

const ImageUploaderInput = styled(Input)`
  margin-right: 50px;
`;

const ImageUploaderButton = styled(Button)``;
