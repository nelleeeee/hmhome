import React from "react";
import styled from "styled-components";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <FooterContainer>
      Copyright (C) 2021 kpopsister CO. All Rights Reserved.
      <Link to="/write" style={{ textDecoration: "none", color: "white" }}>
        <VpnKeyIcon fontSize="small" />
      </Link>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  text-align: center;
  height: 5vh;
  background-color: #ff88a7;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
`;
