import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { ColumnWrapper, RowWrapper } from "../../reusable/styled-components";
import { Component, useState } from "react";
import SidebarOption from "./sidebar-option";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarRows = [
    {
      icon: <StyledIcon icon="mountain" size={40} />,
      label: <h1>Tick-List</h1>,
    },
    {
      icon: <StyledIcon icon="search" size={25} />,
      label: <p>Search</p>,
    },
  ];

  return (
    <Wrapper>
      <SidebarWrapper className={isCollapsed ? "collapsed" : "expanded"}>
        {sidebarRows.map((row) => {
          return <SidebarOption isCollapsed={isCollapsed} content={row} />;
        })}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>Collapse</button>
      </SidebarWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: relative;
  left: 0;
  .collapsed {
    width: 60px;
  }
  .expanded {
    width: 170px;
  }
`;

const SidebarWrapper = styled(ColumnWrapper)`
  height: 100vh;
  border: 0px;
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 10px 15px;
  transition: width 0.2s ease-in-out;
  position: relative;
  overflow-x: hidden;
  row-gap: 20px;
  button {
    width: 50px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primaryWhite};
  }
  .selected {
    background-color: ${(props) => props.theme.colors.highlight1};
    grid-template-columns: 40px 0px;
  }
  .collapsed {
    column-gap: 0px;
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.primaryWhite};
`;
