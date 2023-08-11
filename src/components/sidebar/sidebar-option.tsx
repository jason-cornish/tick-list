import styled from "styled-components";

type PropsTypes = {
  isCollapsed: boolean;
  content: {
    icon: any;
    label: any;
    id: string;
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
    <SidebarOptionWrapper className={classNameSwitch()} id={content.id}>
      {content.icon}
      {renderSwitch(content.label)}
    </SidebarOptionWrapper>
  );
};

export default SidebarOption;

const SidebarOptionWrapper = styled.div`
  display: grid;
  box-sizing: border-box;

  cursor: pointer;
  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 10px 15px;
  box-sizing: border-box;
  align-items: center;
  column-gap: 15px;
  grid-template-columns: 25px 100%;
  transition: background-color 300ms linear;

  span {
    transition: fill 300ms linear;
    height: 25px;
    width: 25px;
    fill: ${(props) => props.theme.colors.primaryWhite};
  }
  h1 {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.primaryWhite};
    margin: 0px;
    font-weight: 600;
    font-size: 26px;
    white-space: nowrap;
  }
  p {
    font-family: ${(props) => props.theme.fonts.header};
    color: ${(props) => props.theme.colors.primaryWhite};
    font-weight: 500;
    font-size: 20px;
    white-space: nowrap;
    margin: 0px;
    transition: color 300ms linear;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.highlight2};

    p {
      color: white;
    }
    span {
      fill: white;
    }
  }
`;
