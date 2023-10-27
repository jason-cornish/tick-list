import { Icon } from "@blueprintjs/core";
import styled from "styled-components";
import { RowWrapper } from "../../reusable/styled-components";
import LogAscent from "./log-ascent";
import SearchBar from "./searchbar";
import User from "./user";

const NavBar = () => {
  return (
    <Nav>
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
  padding: 0px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  font-family: ${(props) => props.theme.fonts.header};
`;
