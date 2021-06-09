import { useState } from "react";
import EditorComponent from "./Editor";
import styled from "styled-components";
import { Button, makeStyles, MenuItem, TextField } from "@material-ui/core";

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
  const [title, setTitle] = useState();

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  // 글쓴이 state
  const [aut, setAut] = useState();

  const handleAut = e => {
    setAut(e.target.value);
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

      <EditorComponent value={desc} onChange={onEditorChange} />
      <EditorWriteButton
        variant="contained"
        style={{ marginTop: "20px", marginBottom: "20px", width: "20%" }}
      >
        글쓰기
      </EditorWriteButton>
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
