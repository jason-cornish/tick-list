import React from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";
import ProfileAscents from "./profile-ascents";
import ProfileHighlights from "./profile-highlights";
import ProfileInfo from "./profile-info";

const Ascents = () => {
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
    <AscentsWrapper>
      <ProfileInfo profile={profile} />
      <ProfileHighlights profile={profile} />
      <ProfileAscents profile={profile} />
    </AscentsWrapper>
  );
};

export default Ascents;

const AscentsWrapper = styled(ColumnWrapper)`
  padding: 15px;
  row-gap: 30px;
`;
