import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { ColumnWrapper, RowWrapper } from "../../reusable/styled-components";
import { Component, useState } from "react";
import SidebarOption from "./sidebar-option";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
  ];

  return (
    <Wrapper>
      <SidebarWrapper className={isCollapsed ? "collapsed" : "expanded"}>
        {sidebarRows.map((row) => {
          return <SidebarOption isCollapsed={isCollapsed} content={row} />;
        })}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>Collap</button>
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
    width: 60px;
  }
  .expanded {
    width: 170px;
  }
`;

const SidebarWrapper = styled(ColumnWrapper)`
  height: 100vh;
  border: 0px;
  padding: 10px 15px;
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
    column-gap: 0px;
  }
  #search {
    grid-template-columns: 25px 100%;
    column-gap: 20px;
    span {
      height: 25px !important;
      width: 25px !important;
    }
  }
  #home {
    column-gap: 20px;
    grid-template-columns: 25px 0px;
    span {
      height: 25px !important;
      width: 25px !important;
    }
  }
  #logo {
    column-gap: 10px;
    grid-template-columns: 35px 100%;
    span {
      height: 35px !important;
      width: 35px !important;
    }
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.primaryWhite};
`;
