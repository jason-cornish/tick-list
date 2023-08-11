import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { ColumnWrapper } from "../../reusable/styled-components";
import { useMemo, useState } from "react";
import SidebarOption from "./sidebar-option";

type PropsType = {
  setSelectedTab: any;
  selectedTab: string;
};

const Sidebar = (props: PropsType) => {
  const { setSelectedTab, selectedTab } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [buttonTimeout, setButtonTimeout] = useState(false);

  console.log(selectedTab);

  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const isTabSelected = (tab: string) => {
    return selectedTab === tab ? "selected" : "unselected";
  };

  const sidebarRows = [
    {
      icon: <StyledIcon icon="mountain" size={35} />,
      onClick: () => selectTab("logo"),
      label: <h1>Tick-List</h1>,
      id: "logo",
      selected: isTabSelected("logo"),
    },
    {
      icon: <StyledIcon icon="home" size={25} />,
      onClick: () => selectTab("home"),
      label: <p>Home</p>,
      id: "home",
      selected: isTabSelected("home"),
    },
    {
      icon: <StyledIcon icon="search" size={25} />,
      onClick: () => selectTab("search"),
      label: <p>Search</p>,
      id: "search",
      selected: isTabSelected("search"),
    },
    {
      icon: <StyledIcon icon="person" size={25} />,
      onClick: () => selectTab("ascents"),
      label: <p>My Ascents</p>,
      id: "ascents",
      selected: isTabSelected("ascents"),
    },
    {
      icon: <StyledIcon icon="dashboard" size={25} />,
      onClick: () => selectTab("kpi"),
      label: <p>My KPI</p>,
      id: "kpi",
      selected: isTabSelected("kpi"),
    },
    {
      icon: <StyledIcon icon="add" size={25} />,
      onClick: () => selectTab("add"),
      label: <p>Log Ascent</p>,
      id: "add",
      selected: isTabSelected("add"),
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
    width: 165px;
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
    p {
      color: white;
    }
    span {
      fill: white;
    }
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
