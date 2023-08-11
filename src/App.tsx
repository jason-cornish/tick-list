import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import NavBar from "./components/navbar/navbar";
import Display from "./components/display/display";
import { getProfiles } from "./data/profiles";
import React, { createContext, useEffect, useState } from "react";

const theme = {
  colors: {
    primaryWhite: "#d5d9de",
    primaryBlack: "#202124",
    secondaryBlack: "#141517",
    highlight1: "#5f6064",
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
  const [profiles, setProfiles] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadedProfiles = getProfiles();
    setProfiles(loadedProfiles);
    setLoading(false);
  }, [setProfiles, setLoading]);

  return (
    <DataContext.Provider
      value={{ searchQuery, setSearchQuery, profiles, setProfiles }}
    >
      <ThemeProvider theme={theme}>
        <ApplicationWrapper>
          <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
          <ContentWrapper>
            <NavBar />
            {loading && (
              <div>
                <h3>loading...</h3>
              </div>
            )}
            {!loading && <Display />}
          </ContentWrapper>
        </ApplicationWrapper>
      </ThemeProvider>
    </DataContext.Provider>
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
