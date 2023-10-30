import React, { useState } from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";
import ProfileAscents from "./profile-ascents";
import ProfileHighlights from "./profile-highlights";
import ProfileInfo from "./profile-info";
import JasonCompressed from "../../../assets/JasonCompressed.jpg";
import ProfileAbout from "./profile-about";

const Profile = () => {
  const [profile, setProfile] = useState({
    icon: "JC",
    profileImage: <ProfileImage src={JasonCompressed} className="profileImg" />,
    name: "Jason Cornish",
    gender: "He/Him",
    location: "Austin, TX",
    maxBoulder: "V7",
    maxRoute: "5.11b",
    totalAscents: 17,
    bestAngle: 45,
    joinYear: 2018,
    ascents: [
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 8,
        attempts: 3,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 7,
      },
      {
        name: "Red Route",
        routeType: "route",
        grade: "11a",
        attempts: 3,
        date: 1693516428,
        angle: 15,
        location: "Mesa Rim",
        id: 8,
      },
      {
        name: "Jonah's Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 2,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 9,
      },
      {
        name: "Tom Eatz Brickz",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 1,
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 2,
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 3,
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 5,
      },
      {
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
        id: 6,
      },
    ],
  });

  return (
    <ProfileWrapper>
      <CenteredDiv>
        <ProfileInsights>
          <ProfileInfo profile={profile} />
          {/* <ProfileAbout profile={profile} /> */}
        </ProfileInsights>

        <ProfileInsights>
          <ProfileHighlights profile={profile} />
        </ProfileInsights>

        <ProfileAscents profile={profile} setProfile={setProfile} />
      </CenteredDiv>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  @media only screen and (max-width: 850px) {
    padding: 15px;
  }
`;

// const ProfileImage = styled.div`
//   img {
//     width: 100%;
//     height: 100%;
//   }
//   .profileImg {
//     width: 170px;
//     height: 170px;
//   }
//   @media only screen and (max-width: 980px) {
//     width: 100px;
//     height: 100px;
//   }
// `;

const CenteredDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  row-gap: 15px;
  column-gap: 15px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.other.borderRadius};
`;

const ProfileInsights = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  row-gap: 15px;
  @media only screen and (max-width: 1200px) {
    row-gap: 20px;
  }
`;

const DisplayConditional = styled.div`
  /* @media only screen and (min-width: 980px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  } */
`;
