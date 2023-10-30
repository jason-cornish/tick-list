import React from "react";
import styled from "styled-components";
import { ColumnWrapper, GreyText } from "../../../reusable/styled-components";

const ProfileAbout = (props: any) => {
  const { profile } = props;
  return (
    <ProfileAboutWrapper>
      {/* <GreyText>About</GreyText> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit
        velit, fugiat dolores nemo iste esse veniam laborum adipisci possimus.
        Eum et aspernatur debitis aut fugiat a alias suscipit saepe.
      </p>
    </ProfileAboutWrapper>
  );
};

export default ProfileAbout;

const ProfileAboutWrapper = styled(ColumnWrapper)`
  /* padding: 20px; */
  font-family: ${(props) => props.theme.fonts.header};
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
  row-gap: 20px;
  max-width: 50%;
  .tabTitle {
    color: ${(props) => props.theme.colors.grey};
    font-size: 18px;
  }
  p {
    color: ${(props) => props.theme.colors.primaryWhite};
    font-size: 20px;
  }
`;
