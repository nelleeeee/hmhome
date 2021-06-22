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

  // 카테고리 셀렉트
  const categories = [
    {
      value: "공지사항",
      label: "공지사항",
    },
    {
      value: "펜사인회",
      label: "펜사인회",
    },
    {
      value: "럭키드로우",
      label: "럭키드로우",
    },
    {
      value: "상품",
      label: "상품",
    },
  ];
  const [category, setCategory] = useState("공지사항");

  const handleChange = event => {
    setCategory(event.target.value);
  };

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

  // 파일 이름 state
  const [fileUrl, setFileUrl] = useState("");
  const [dis, setDis] = useState(true);
  const handleUrl = e => {
    setFileUrl(e);
  };

  // 해쉬태그
  const [hashes, setHashes] = useState("");

  const handleHash = e => {
    setHashes(e.target.value);
  };

  let hashTags = [];
  const HASHTAG_FORMATTER = string => {
    string.split(/((?:^|\s)(?:#[a-z\d-]+))/gi).map(v => {
      if (v.includes("#")) {
        hashTags.push(v);
      }
    });
  };

  // 글쓰기 버튼
  const history = useHistory();
  const makeWrite = e => {
    e.preventDefault();
    HASHTAG_FORMATTER(hashes);
    db.collection("content").doc().set({
      title: title,
      aut: aut,
      content: desc,
      category: category,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      fileUrl: fileUrl,
      hashTags: hashTags,
      view: 0,
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
        <EditorCategory
          select
          label="말머리"
          value={category}
          onChange={handleChange}
          style={{ marginTop: "20px", width: "45%" }}
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </EditorCategory>
        <EditorAut
          label="글쓴이"
          variant="outlined"
          value={aut}
          onChange={handleAut}
          style={{ marginTop: "20px", width: "45%" }}
        />
      </EditorCategoryAut>
      <ImageUploader handleUrl={handleUrl} setDis={setDis} />
      <HashTags
        placeholder="# HASH TAG(#과 띄어쓰기로 구분)"
        value={hashes}
        onChange={handleHash}
      />
      <EditorComponent value={desc} onChange={onEditorChange} />
      {title && aut && desc && dis ? (
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
  flex-direction: column;
  align-items: center;
`;

const EditorTitle = styled(TextField)`
  width: 650px;
`;

const EditorCategoryAut = styled.div`
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const EditorCategory = styled(TextField)``;
const EditorAut = styled(TextField)``;

const EditorWriteButton = styled(Button)``;

const HashTags = styled(TextField)`
  width: 680px;
`;
