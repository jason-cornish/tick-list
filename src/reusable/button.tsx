import { Icon } from "@blueprintjs/core";
import styled from "styled-components";
import { RowWrapper } from "./styled-components";

type PropsType = {
  text: string | boolean;
  icon: any;
  onClick: any;
  type: string;
};

const Button = (props: PropsType) => {
  const { text, icon, onClick, type } = props;

  return type === "regular" ? (
    <RegularButtonWrapper onClick={onClick} key="regular">
      {icon}
      {text ? <p>{text}</p> : <></>}
    </RegularButtonWrapper>
  ) : (
    <FancyButtonWrapper onClick={onClick} key="fancy">
      {icon}
      {text ? <p>{text}</p> : <></>}
    </FancyButtonWrapper>
  );
};

export default Button;

const RegularButtonWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: ${(props) => props.theme.other.borderRadius};
  /* border: 2px solid ${(props) => props.theme.colors.primaryWhite}; */
  padding: 3px 15px;
  background-color: ${(props) => props.theme.colors.highlight3};
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  p {
    margin: 0px;
    color: ${(props) => props.theme.colors.primaryWhite};
  }
  svg {
    fill: ${(props) => props.theme.colors.primaryWhite};
    padding-top: 3px;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.highlight4};
  }
`;

const FancyButtonWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: center;
  height: 42px;
  column-gap: 15px;
  border-radius: ${(props) => props.theme.other.borderRadius};
  /* border: 2px solid ${(props) => props.theme.colors.primaryWhite}; */
  padding: 0px 15px;
  background-color: ${(props) => props.theme.colors.highlight1};
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  p {
    margin: 0px;
    color: ${(props) => props.theme.colors.secondaryBlack} !important;
    font-size: 18px;
  }
  svg {
    fill: ${(props) => props.theme.colors.secondaryBlack};
    padding-top: 3px;
  }
  :hover {
    background-color: #00c07d;
  }
`;
