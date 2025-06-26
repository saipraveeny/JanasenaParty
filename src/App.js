import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import MissionSection from "./components/MissionSection";
import VideoCarousel from "./components/VideoCarousel";
import ActionButtons from "./components/ActionButtons";
import IdealsInfographics from "./components/IdealsInfographics";
import Footer from "./components/Footer";
import JoinCards from "./components/JoinCards";
import Membership from "./components/Membership";
import Donations from "./components/Donations";
import SAVVE from "./components/SAVVE";
import Volunteers from "./components/Volunteers";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    width: 100%;
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 4rem; /* Account for fixed Navbar only */
`;

function App() {
  return (
    <Router>
      <MainWrapper>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <MissionSection />
                <VideoCarousel />
                <ActionButtons />
                <section id="ideals-section">
                  <IdealsInfographics />
                </section>
                <JoinCards />
                <Footer />
              </>
            }
          />
          <Route path="/membership" element={<Membership />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/savve" element={<SAVVE />} />
          <Route path="/volunteer" element={<Volunteers />} />
        </Routes>
      </MainWrapper>
    </Router>
  );
}

export default App;
