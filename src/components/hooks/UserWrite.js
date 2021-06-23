import { useState } from "react";
import EditorComponent from "./Editor";
import styled from "styled-components";
import { Button, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { db } from "../../firebase";
import firebase from "firebase";
import { useHistory } from "react-router";
import ImageUploader from "./ImageUploader";

const Write = () => {
  //    본문 state
  const [desc, setDesc] = useState("");
  function onEditorChange(value) {
    setDesc(value);
  }

  // 타이틀 state
  const [title, setTitle] = useState("");

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  // 글쓴이 state
  const [aut, setAut] = useState("");
  const handleAut = e => {
    setAut(e.target.value);
  };

  // Password state
  const [password, setPassword] = useState("");
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  // 글쓰기 버튼
  const history = useHistory();

  const makeWrite = e => {
    e.preventDefault();
    db.collection("content").doc().set({
      title: title,
      password,
      aut: aut,
      content: desc,
      category: "QNA",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    history.push({
      pathname: "/",
    });
  };

  return (
    <EditorContainer>
      <EditorTitle
        label="제목"
        variant="outlined"
        style={{ marginTop: "20px" }}
        value={title}
        onChange={handleTitle}
      />

      <EditorCategoryAut style={{ marginBottom: "20px" }}>
        <EditorAut
          label="글쓴이"
          variant="outlined"
          value={aut}
          onChange={handleAut}
          style={{ marginTop: "20px", width: "45%" }}
        />
        <EditorPassword
          label="Password"
          variant="outlined"
          style={{ marginTop: "20px" }}
          value={password}
          onChange={handlePassword}
          type="password"
        />
      </EditorCategoryAut>

      <EditorComponent value={desc} onChange={onEditorChange} />
      {aut && desc ? (
        <EditorWriteButton
          onClick={makeWrite}
          type="submit"
          variant="contained"
          style={{ marginTop: "20px", marginBottom: "20px", width: "20%" }}
        >
          글쓰기
        </EditorWriteButton>
      ) : (
        <EditorWriteButton
          disabled
          onClick={makeWrite}
          type="submit"
          variant="contained"
          style={{ marginTop: "20px", marginBottom: "20px", width: "20%" }}
        >
          글쓰기
        </EditorWriteButton>
      )}
    </EditorContainer>
  );
};

export default Write;

const EditorContainer = styled.div`
  margin: auto;
  width: 90%;
  min-width: 600px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const EditorTitle = styled(TextField)`
  width: 80%;
`;

const EditorCategoryAut = styled.div`
  /* width: 650px; */
  width: 80%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
`;
const EditorAut = styled(TextField)`
  flex: 0.5;
`;
const EditorPassword = styled(TextField)`
  flex: 0.5;
`;

const EditorWriteButton = styled(Button)``;
