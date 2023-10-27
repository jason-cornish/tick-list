import { Icon } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";
import {
  ColumnWrapper,
  GreyText,
  RowWrapper,
} from "../../../reusable/styled-components";
import ProfileHighlights from "./profile-highlights";

const ProfileInfo = (props: any) => {
  const { profile } = props;

  return (
    <ProfileInfoWrapper>
      <AcctIcon>{profile.profileImage}</AcctIcon>
      <ProfileText>
        <ProfileName>
          <h1 id="profile">{profile.name}</h1>
        </ProfileName>
        <ProfileDetails>
          <ProfileDetail>
            <Icon icon="map-marker" size={20} />
            <p>He/Him</p>
          </ProfileDetail>
          <ProfileDetail>
            <Icon icon="map-marker" size={20} />
            <p>Austin, TX</p>
          </ProfileDetail>
          <ProfileDetail>
            <Icon icon="flag" size={20} />
            <p>Joined Dec 2018</p>
          </ProfileDetail>
          {/* <ProfileDetail>
          Climbing since {profile.joinYear} &#x2022; <Icon icon="map-marker" />
          {profile.location} &#x2022; {profile.gender}
        </ProfileDetail> */}
        </ProfileDetails>

        <DisplayConditional>
          {/* <ProfileHighlights profile={profile} /> */}
        </DisplayConditional>
      </ProfileText>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const ProfileInfoWrapper = styled(RowWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  column-gap: 30px;
  padding: 20px;
  font-family: ${(props) => props.theme.fonts.header};
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
  position: relative;
`;

const AcctIcon = styled.div`
  width: 170px;
  height: 170px;
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: ${(props) => props.theme.other.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryBlack};
  font-size: 26px;
  @media only screen and (max-width: 980px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileText = styled(ColumnWrapper)`
  row-gap: 9px;
  @media only screen and (max-width: 980px) {
    justify-content: normal;
    row-gap: 10px;
  }
  font-size: 16px;
  #profile {
    font-size: 35px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
  }
`;

const DisplayConditional = styled.div`
  margin-top: 10px;
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const ProfileName = styled(RowWrapper)`
  column-gap: 5px;
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
`;

const ProfileDetail = styled(RowWrapper)`
  align-items: center;
  font-size: 16px;
  column-gap: 10px;
  p {
    font-family: Archivo;
    margin-bottom: 5px;
  }
  .bp5-icon {
    fill: ${(props) => props.theme.colors.primaryWhite};
    margin-right: 2px;
  }
`;
