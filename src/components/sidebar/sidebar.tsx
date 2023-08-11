import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { ColumnWrapper } from "../../reusable/styled-components";
import { useState } from "react";
import SidebarOption from "./sidebar-option";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [buttonTimeout, setButtonTimeout] = useState(false);

  const sidebarRows = [
    {
      icon: <StyledIcon icon="mountain" size={35} />,
      label: <h1>Tick-List</h1>,
      id: "logo",
    },
    {
      icon: <StyledIcon icon="home" size={25} />,
      label: <p>Home</p>,
      id: "home",
    },
    {
      icon: <StyledIcon icon="search" size={25} />,
      label: <p>Search</p>,
      id: "search",
    },
    {
      icon: <StyledIcon icon="people" size={25} />,
      label: <p>My Ascents</p>,
      id: "people",
    },
    {
      icon: <StyledIcon icon="dashboard" size={25} />,
      label: <p>My KPI</p>,
      id: "kpi",
    },
    {
      icon: <StyledIcon icon="add" size={25} />,
      label: <p>Log Ascent</p>,
      id: "add",
    },
  ];

  /**Prevents accidental double-clicking of collapse/expand button*/
  const handleCollapseExpand = () => {
    if (buttonTimeout) {
      setTimeout(() => {
        setButtonTimeout(!buttonTimeout);
      }, 500);
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Wrapper>
      <SidebarWrapper className={isCollapsed ? "collapsed" : "expanded"}>
        {sidebarRows.map((row) => {
          return <SidebarOption isCollapsed={isCollapsed} content={row} />;
        })}
        <button onClick={handleCollapseExpand}>Collap</button>
      </SidebarWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: 5px;
  left: 0;
  box-sizing: border-box;
  .collapsed {
    width: 55px;
  }
  .expanded {
    width: 170px;
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.primaryWhite};
`;

const SidebarWrapper = styled(ColumnWrapper)`
  height: 100vh;
  border: 0px;
  padding: 10px;
  transition: width 0.2s ease-in-out;
  position: relative;
  overflow-x: hidden;
  align-items: center;
  row-gap: 10px;
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
    column-gap: 0px !important;
  }
  #logo {
    column-gap: 10px;
    grid-template-columns: 25px 100%;
    span {
      margin-left: -5px;
      margin-top: -5px;
      height: 30px !important;
      width: 25px !important;
    }
  }
`;
