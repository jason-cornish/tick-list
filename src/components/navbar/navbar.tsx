import styled from "styled-components";
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
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.header};
`;
