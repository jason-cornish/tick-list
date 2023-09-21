import React from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";
import ProfileHighlights from "./profile-highlights";

const ProfileInfo = (props: any) => {
  const { profile } = props;
  return (
    <ProfileInfoWrapper>
      <AcctIcon>{profile.icon}</AcctIcon>
      <ProfileText>
        <ProfileName>
          <h1 id="profile">{profile.name}</h1>
          <span>{profile.gender}</span>
        </ProfileName>
        <ProfileDetail>{profile.location}</ProfileDetail>
        <DisplayConditional>
          <ProfileHighlights profile={profile} />
        </DisplayConditional>
      </ProfileText>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const ProfileInfoWrapper = styled(RowWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  column-gap: 15px;
  font-family: ${(props) => props.theme.fonts.header};
  position: relative;
`;

const AcctIcon = styled.div`
  width: 160px;
  height: 160px;
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 26px;
  @media only screen and (max-width: 980px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileText = styled(ColumnWrapper)`
  justify-content: space-between;
  @media only screen and (max-width: 980px) {
    justify-content: normal;
    row-gap: 10px;
  }
  font-size: 16px;
  #profile {
    font-size: 26px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: -7px;
  }
  span {
    font-size: 14px;
  }
`;

const DisplayConditional = styled.div`
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const ProfileName = styled(RowWrapper)`
  column-gap: 5px;
`;

const ProfileDetail = styled.p`
  font-size: 20px;
`;
