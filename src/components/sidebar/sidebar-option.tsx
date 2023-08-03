import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { ColumnWrapper, RowWrapper } from "../../reusable/styled-components";
import { Component, useState } from "react";

type PropsTypes = {
  isCollapsed: boolean;
  content: {
    icon: any;
    label: any;
  };
};

const SidebarOption = (props: PropsTypes) => {
  const { isCollapsed, content } = props;

  const renderSwitch = (component: any) => {
    return isCollapsed ? <div /> : component;
  };

  const classNameSwitch = () => {
    return isCollapsed ? "collapsed" : "expanded";
  };

  return (
    <SidebarOptionWrapper className={classNameSwitch()}>
      {content.icon}
      {renderSwitch(content.label)}
    </SidebarOptionWrapper>
  );
};

export default SidebarOption;

const SidebarOptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 100%;
  column-gap: 5px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 5px 10px;
  box-sizing: border-box;
  .collapsed {
    display: none;
    column-gap: 0px;
  }
  h1 {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.primaryWhite};
    margin: 0px;
    margin-top: 6px;
    font-weight: 600;
    font-size: 26px;
    white-space: nowrap;
  }
  p {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.primaryWhite};
    font-size: 20px;
    white-space: nowrap;
    margin: 0px;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.highlight2};
  }
`;
