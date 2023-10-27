import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import NavBar from "./components/navbar/navbar";
import Display from "./components/display/search";
import { getProfiles } from "./data/profiles";
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Profile from "./components/display/ascents/profile";

const theme = {
  colors: {
    primaryWhite: "#ccd0d9",
    primaryBlack: "#252932",
    secondaryBlack: "#1d2027",
    darkestBlack: "#0e0e0f",
    highlight1: "#00c07d",
    grey: "#8992a7",
    // highlight1: "#0d9263",
    // highlight1: "#00d68b",
    highlight2: "#303134",
    highlight3: "#2e323e",
    highlight4: "#363c49",
    borderColor: "#919191",
  },
  fonts: {
    header: "Roboto",
    body: "Archivo",
  },
  other: {
    borderRadius: "7px",
  },
};

export const DataContext = createContext<any>({} as any);

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("home");
  const [profiles, setProfiles] = useState<{ [key: string]: any }>([]);
  const [loading, setLoading] = useState(true);
  const [showGreyLayer, setShowGreyLayer] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const loadedProfiles = await getProfiles();
      setProfiles(loadedProfiles);
    };
    fetchData();
    setLoading(false);
  }, [setProfiles, setLoading]);

  return (
    <Router>
      <DataContext.Provider
        value={{
          searchQuery,
          setSearchQuery,
          profiles,
          setProfiles,
          loading,
          showGreyLayer,
          setShowGreyLayer,
        }}
      >
        <ThemeProvider theme={theme}>
          <GreyLayerWrapper>
            <div className={showGreyLayer ? "visible" : "invisible"} />
          </GreyLayerWrapper>
          <ApplicationWrapper>
            <Sidebar
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />

            <ContentWrapper>
              <NavBar />
              <Routes>
                <Route path="/ascents" element={<Profile />}></Route>
                <Route path="/search" element={<Display />}></Route>
              </Routes>
            </ContentWrapper>
          </ApplicationWrapper>
        </ThemeProvider>
      </DataContext.Provider>
    </Router>
  );
};

export default App;

const ApplicationWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBlack};
  display: flex;
  column-gap: 15px;
  padding: 15px;
  height: fill-available;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: fill-available;
  /* background-color: ${(props) => props.theme.colors.primaryBlack}; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const GreyLayerWrapper = styled.div`
  .visible {
    display: flex;
    position: absolute;
    z-index: 2;
    background-color: black;
    opacity: 45%;
    width: 100%;
    height: 100%;
    margin: 0px;
    animation: opacify 300ms ease-in 0ms forwards;
    @keyframes opacify {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 45%;
      }
    }
  }
  .invisible {
    display: none;
    opacity: 0;
  }
`;
