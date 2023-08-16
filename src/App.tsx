import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import NavBar from "./components/navbar/navbar";
import Display from "./components/display/display";
import { getProfiles } from "./data/profiles";
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Ascents from "./components/ascents";

const theme = {
  colors: {
    primaryWhite: "#d5d9de",
    primaryBlack: "#202124",
    secondaryBlack: "#141517",
    highlight1: "#0d9263",
    highlight2: "#303134",
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
        value={{ searchQuery, setSearchQuery, profiles, setProfiles, loading }}
      >
        <ThemeProvider theme={theme}>
          <ApplicationWrapper>
            <Sidebar
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />

            <ContentWrapper>
              <NavBar />

              <Routes>
                <Route path="/ascents" element={<Ascents />}></Route>
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
  padding: 10px;
  display: flex;
  column-gap: 10px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
