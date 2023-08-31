import React from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";

const ProfileInfo = (props: any) => {
  const { profile } = props;
  return (
    <ProfileInfoWrapper>
      <AcctIcon>{profile.icon}</AcctIcon>
      <ProfileText>
        <ProfileName>
          <h1 id="profile">{profile.name}</h1>
          <p>{profile.gender}</p>
        </ProfileName>
        <ProfileDetail>{profile.location}</ProfileDetail>
        <ProfileDetail>
          {profile.maxBoulder} / {profile.maxRoute}
        </ProfileDetail>
      </ProfileText>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;

const ProfileInfoWrapper = styled(RowWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  column-gap: 15px;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.header};
`;

const AcctIcon = styled.div`
  width: 170px;
  height: 170px;
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 26px;
`;

const ProfileText = styled(ColumnWrapper)`
  row-gap: 5px;
  font-size: 16px;
  #profile {
    font-weight: 500;
  }
`;

const ProfileName = styled(RowWrapper)`
  column-gap: 5px;
`;

const ProfileDetail = styled.p`
  font-size: 18px;
`;
