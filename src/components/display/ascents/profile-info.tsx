import { Icon } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";
import {
  ColumnWrapper,
  GreyText,
  RowWrapper,
} from "../../../reusable/styled-components";
import ProfileAbout from "./profile-about";
import ProfileHighlights from "./profile-highlights";

const ProfileInfo = (props: any) => {
  const { profile } = props;

  return (
    <ProfileInfoWrapper>
      <WideWrapper>
        {profile.profileImage}
        <RowWrapper className="row">
          <ProfileText>
            {/* <GreyText>User Profile</GreyText> */}
            <ProfileName>
              <h1 id="profile">{profile.name}</h1>
            </ProfileName>
            <ProfileDetails>
              <ProfileDetail>
                <span>@</span>
                <p>jason_cornish</p>
              </ProfileDetail>
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
            </ProfileDetails>
            <ProfileAbout profile={profile} />

            {/* <DisplayConditional>
          <ProfileHighlights profile={profile} />
        </DisplayConditional> */}
          </ProfileText>
        </RowWrapper>
      </WideWrapper>
      <MobileWrapper></MobileWrapper>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const ProfileInfoWrapper = styled(RowWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};

  padding: 20px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.header};
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
  position: relative;
  min-width: 600px;
`;

const WideWrapper = styled(RowWrapper)`
  column-gap: 30px;
  border-radius: ${(props) => props.theme.other.borderRadius};
  .row {
    column-gap: 20px;
  }
  .profileImg {
    width: 170px;
    height: 170px;
    flex-shrink: 0;
    border-radius: ${(props) => props.theme.other.borderRadius};
    @media only screen and (max-width: 850px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const MobileWrapper = styled(ColumnWrapper)``;

const ProfileText = styled(ColumnWrapper)`
  row-gap: 5px;
  @media only screen and (max-width: 980px) {
    justify-content: normal;
    row-gap: 10px;
  }
  font-size: 16px;
  #profile {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 5px;
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
  display: flex;
  column-gap: 30px;
`;

const ProfileDetail = styled(RowWrapper)`
  position: relative;
  align-items: center;
  font-size: 16px;
  column-gap: 5px;
  box-sizing: border-box;
  span {
    font-weight: bold;
    color: ${(props) => props.theme.colors.grey};
    font-size: 18px;
    top: -10px;
  }
  p {
    font-family: Archivo;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.grey};
  }
  .bp5-icon {
    fill: ${(props) => props.theme.colors.grey};
    margin-right: 2px;
  }
`;
