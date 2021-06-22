import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

export default function CopyToClip() {
  return (
    <CopyToClipboard
      text={window.location.href}
      onCopy={() => alert("링크가 클립보드에 복사되었어요!")}
    >
      <Container src="https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-58-512.png" />
    </CopyToClipboard>
  );
}

const Container = styled.img`
  margin-right: 10px;
  margin-top: 5px;
  height: 50px;
  border-radius: 50px;
  :hover {
    cursor: pointer;
  }
`;
