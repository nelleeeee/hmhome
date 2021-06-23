import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import FanSign from "./components/body/fansign/EventsContent";
import Home from "./components/body/home/Home";
import Faq from "./components/body/faq/Faq";
import Notice from "./components/body/notice/Notice";
import Write from "./components/hooks/Write";
import UserWrite from "./components/hooks/UserWrite";
import FanSignList from "./components/body/fansign/FanSignList";
import EventsContent from "./components/body/fansign/EventsContent";
import LuckyList from "./components/body/lucky/LuckyList";
import GoodsList from "./components/body/goods/GoodsList";
import NoticeContent from "./components/body/notice/NoticeContent";
import Info from "./components/body/info/Info";
import Guide from "./components/sidebar/Guide";
import LuckyContent from "./components/body/lucky/LuckyContent";
import GoodsContent from "./components/body/goods/GoodsContent";
import QnaContent from "./components/body/faq/QnaContent";

function App() {
  return (
    <AppContainer>
      <Router>
        <>
          <Header />

          <SidebarAppBody>
            <Sidebar />
            <AppBody>
              <Route
                exact
                path="/noticecontent/:id"
                component={NoticeContent}
              />
              <Route exact path="/notice" component={Notice} />
              <Route exact path="/fansign" component={FanSignList} />
              <Route
                exact
                path="/eventscontent/:id"
                component={EventsContent}
              />
              <Route exact path="/lucky" component={LuckyList} />
              <Route exact path="/lucky/:id" component={LuckyContent} />
              <Route exact path="/goods" component={GoodsList} />
              <Route exact path="/goods/:id" component={GoodsContent} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/qna/:id" component={QnaContent} />
              <Route exact path="/guide" component={Guide} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/write" component={Write} />
              <Route exact path="/userwrite" component={UserWrite} />
              <Route exact path="/" component={Home} />
            </AppBody>
          </SidebarAppBody>
          <Footer />
        </>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: whitesmoke;
`;

const SidebarAppBody = styled.div`
  display: flex;
  width: 100%;
`;

const AppBody = styled.div`
  width: 80%;
  /* margin: auto; */
  margin-left: 150px;
  display: flex;
  min-height: 700px;
  flex-direction: column;
`;
