import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { ColumnWrapper, RowWrapper } from "../../reusable/styled-components";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <StyledIcon icon="mountain" size={45} />
        <h1>Tick-List</h1>
      </Logo>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled(ColumnWrapper)`
  width: 250px;
  height: 100vh;
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 10px 15px;
  box-sizing: border-box;
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.primaryWhite};
`;

const Logo = styled(RowWrapper)`
  margin-right: 3px;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  h1 {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.primaryWhite};
    margin: 0px;
    font-weight: 600;
  }
`;
