import React from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";
import ProfileAscents from "./profile-ascents";
import ProfileHighlights from "./profile-highlights";
import ProfileInfo from "./profile-info";

const Profile = () => {
  const profile = {
    icon: "JC",
    name: "Jason Cornish",
    gender: "He/Him",
    location: "Austin, TX",
    maxBoulder: "V7",
    maxRoute: "5.11b",
    totalAscents: 17,
    bestAngle: 45,
    ascents: [
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 3,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 6,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 2,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
    ],
  };

  return (
    <ProfileWrapper>
      <ProfileInsights>
        <ProfileInfo profile={profile} />
        <DisplayConditional>
          <ProfileHighlights profile={profile} />
        </DisplayConditional>
      </ProfileInsights>

      <ProfileAscents profile={profile} />
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 30px;
  row-gap: 20px;
  column-gap: 60px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
`;

const ProfileInsights = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  @media only screen and (max-width: 1200px) {
    row-gap: 20px;
  }
`;

const DisplayConditional = styled.div`
  @media only screen and (min-width: 980px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
