import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import NavBar from "./components/navbar/navbar";

const theme = {
  colors: {
    primaryWhite: "#e0e3e7",
    primaryBlack: "#202124",
    highlight1: "#7F8082",
    highlight2: "#303134",
    borderColor: "#919191",
  },
  fonts: {
    header: "Roboto",
    body: "Archivo",
  },
  other: {
    borderRadius: "3px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <Sidebar />
        <NavBar />
      </ApplicationWrapper>
    </ThemeProvider>
  );
};

export default App;

const ApplicationWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlack};
  display: flex;
`;
