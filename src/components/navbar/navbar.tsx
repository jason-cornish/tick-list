import { Icon } from "@blueprintjs/core";
import styled from "styled-components";
import { RowWrapper } from "../../reusable/styled-components";
import LogAscent from "./log-ascent";
import SearchBar from "./searchbar";
import User from "./user";
import Button from "../../reusable/button";

const NavBar = () => {
  return (
    <Nav>
      <DisplayConditional>
        <SearchBar />
      </DisplayConditional>

      <RightSection>
        <Button
          icon={<Icon icon="add" size={20} />}
          text="Log Ascent"
          onClick={() => {}}
          type="fancy"
        />
        <User />
      </RightSection>
    </Nav>
  );
};

export default NavBar;

const Nav = styled(RowWrapper)`
  width: 100%;
  height: 80px;
  padding: 0px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  font-family: ${(props) => props.theme.fonts.header};
  border-radius: ${(props) => props.theme.other.borderRadius};
`;

const RightSection = styled(RowWrapper)`
  column-gap: 15px;
  align-items: center;
  justify-content: center;
`;

const DisplayConditional = styled.div`
  display: flex;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
