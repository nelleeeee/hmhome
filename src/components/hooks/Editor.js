import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// import ImageResize from "quill-image-resize-module";

class EditorComponent extends Component {
  modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        // ["image", "video"],
        [{ color: [] }, { background: [] }],
        ["clean"],
        ["blockquote", "link", "code-block", "formula"], // media
      ],
      // handlers: {
      //   image: this.imageHandler,
      // },
    },
    // imageResize: false,
  };

  formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
    "code-block",
  ];

  render() {
    const { value, onChange } = this.props;
    return (
      <div style={{ height: "650px", marginTop: "30px" }}>
        <ReactQuill
          style={{ height: "600px" }}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={value || ""}
          onChange={(content, delta, source, editor) =>
            onChange(editor.getHTML())
          }
        />
      </div>
    );
  }
}
export default EditorComponent;
