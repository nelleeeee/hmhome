import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import CopyToClip from "./CopyToClip";

function Share({ url, title }) {
  const Url = encodeURIComponent("https://hmhome-30ed7.web.app/" + url);

  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?url=${Url}&text=${title}`,
      "popup제목",
      "width=400, height=400"
    );
  }

  function shareFacebook() {
    window.open(
      `http://www.facebook.com/sharer.php?u=${Url}&t=${title}`,
      "popup제목",
      "width=400, height=400"
    );
  }
  function shareLine() {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${Url}&text=&from=line_scheme`,
      "popup제목",
      "width=400, height=400"
    );
  }

  const { Kakao } = window;
  const KakaoS = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: "#hash",
        imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <Container>
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>

      <Tw
        src="https://mblogthumb-phinf.pstatic.net/MjAxODA5MjhfMTU4/MDAxNTM4MTIxMDM1NjEz.y_vypYsX9eNReCcIklqgl_UB2IKe_vVM_uYdSE-o2log.XClSScgwlU1PtY2b9iWQINVhHNrYReHaC9gYav-IWjgg.PNG.dnduf75/%EB%A1%9C%EA%B3%A0%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%ED%8A%B8%EC%9C%84%ED%84%B0%EB%A1%9C%EA%B3%A0-png-3.png?type=w800"
        onClick={shareTwitter}
      />

      <Fb
        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
        onClick={shareFacebook}
      />
      <Li
        src="https://i.pinimg.com/originals/b2/22/db/b222dbc287cbf2b0100bddb6e5991a08.png"
        onClick={shareLine}
      />

      <Ka
        src="https://blog.kakaocdn.net/dn/Sq4OD/btqzlkr13eD/dYwFnscXEA6YIOHckdPDDk/img.jpg"
        onClick={KakaoS}
      />

      <CopyToClip />
    </Container>
  );
}

export default Share;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: darkgray; */
`;

const Tw = styled.img`
  margin-right: 10px;
  margin-top: 5px;
  height: 50px;
  border-radius: 50px;
  :hover {
    cursor: pointer;
  }
`;
const Fb = styled.img`
  margin-right: 10px;
  margin-top: 5px;
  height: 50px;
  border-radius: 50px;
  :hover {
    cursor: pointer;
  }
`;
const Li = styled.img`
  margin-right: 10px;
  margin-top: 5px;
  height: 50px;
  border-radius: 50px;
  :hover {
    cursor: pointer;
  }
`;

const Ka = styled.img`
  margin-right: 10px;
  margin-top: 5px;
  height: 52px;
  border-radius: 50px;
  :hover {
    cursor: pointer;
  }
`;
