import { Icon } from "@blueprintjs/core";
import styled from "styled-components";
import SearchBar from "./searchbar";
import User from "./user";

const NavBar = () => {
  return (
    <Nav>
      <ButtonWrapper>
        <BackButton>
          <StyledIcon title="Go Back" icon="chevron-left" size={20} />
        </BackButton>
        <BackButton>
          <StyledIcon title="Go Forward" icon="chevron-right" size={20} />
        </BackButton>
      </ButtonWrapper>
      <SearchBar />
      <User />
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  font-family: ${(props) => props.theme.fonts.header};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const BackButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.highlight2};
  padding: 5px;
  border-radius: 999px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.primaryWhite};
  display: flex;
  align-items: center;
`;
