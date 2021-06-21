import React from "react";
import styled from "styled-components";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase";

function Footer() {
  const signIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(e => alert(e.message));
  };
  return (
    <FooterContainer>
      Copyright (C) 2021 kpopsister CO. All Rights Reserved.
      <VpnKeyIcon fontSize="small" onClick={signIn} />
      <Link to="/write" style={{ textDecoration: "none", color: "white" }}>
        <CreateIcon fontSize="small" />
      </Link>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  text-align: center;
  height: 5vh;
  background-color: #ff88a8a9;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
`;
