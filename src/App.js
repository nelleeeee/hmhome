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
import FanSignList from "./components/body/fansign/FanSignList";
import EventsContent from "./components/body/fansign/EventsContent";
import LuckyList from "./components/body/lucky/LuckyList";
import GoodsList from "./components/body/goods/GoodsList";
import NoticeContent from "./components/body/notice/NoticeContent";

function App() {
  return (
    <AppContainer>
      <Router>
        <>
          <Header />

          <SidebarAppBody>
            <Sidebar />
            <AppBody>
              <Route exact path="/write" component={Write} />
              <Route exact path="/notice" component={Notice} />
              <Route
                exact
                path="/noticecontent/:id"
                component={NoticeContent}
              />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/fansign" component={FanSignList} />
              <Route exact path="/lucky" component={LuckyList} />
              <Route exact path="/goods" component={GoodsList} />
              <Route exact path="/eventscontent" component={EventsContent} />
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
  /* height: 100vh; */
`;

const SidebarAppBody = styled.div`
  display: flex;
  width: 100%;
`;

const AppBody = styled.div`
  /* background-color: blue; */
  width: 80%;

  display: flex;
  flex-direction: column;
`;
