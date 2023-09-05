import React, { useState } from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";

const ProfileAscents = (props: any) => {
  const { profile } = props;

  const [selectedTab, setSelectedTab] = useState("recent");

  const stringifyAttempts = (attemptCount: number) => {
    return attemptCount === 1 ? "Flash" : `${attemptCount} Tries`;
  };

  const stringifyGrade = (grade: number, routeType: string) => {
    return routeType === "boulder" ? `V${grade}` : `5.${grade}`;
  };

  /*
{
        name: "Sophies Problem",
        routeType: "boulder",
        grade: 7,
        attempts: 1,
        date: 1693516428,
        angle: 45,
        location: "Moonboard",
      },
  */

  const renderAscents = () => {
    if (profile.ascents.length === 0) {
      return <NoData></NoData>;
    }
    return (
      <>
        {profile.ascents.map((ascent: any) => {
          return (
            <Ascent>
              <FirstColumn>
                <h1>{stringifyGrade(ascent.grade, ascent.routeType)}</h1>
                <h2 className={ascent.attemptCount > 1 ? "non-flash" : "flash"}>
                  {stringifyAttempts(ascent.attempts)}
                </h2>
              </FirstColumn>
            </Ascent>
          );
        })}
      </>
    );
  };

  return (
    <ProfileAscentsWrapper>
      <TabRow>
        <Tab
          onClick={() => setSelectedTab("recent")}
          className={selectedTab === "recent" ? "active" : "inactive"}
        >
          <TabName>Recent Ascents</TabName>
          <Underline />
        </Tab>
        <Tab
          onClick={() => setSelectedTab("hardest")}
          className={selectedTab === "hardest" ? "active" : "inactive"}
        >
          <TabName>Hardest Ascents</TabName>
          <Underline />
        </Tab>
      </TabRow>
      <AscentsContainer>{renderAscents()}</AscentsContainer>
    </ProfileAscentsWrapper>
  );
};

export default ProfileAscents;

const ProfileAscentsWrapper = styled(ColumnWrapper)`
  column-gap: 25px;
`;

const TabRow = styled(RowWrapper)`
  column-gap: 20px;
  .active {
    background-color: ${(props) => props.theme.colors.highlight1};

    p {
      color: #fff;
    }
  }
  .inactive {
    :hover {
      background-color: ${(props) => props.theme.colors.highlight2};
    }
  }
`;

const Tab = styled(ColumnWrapper)`
  cursor: pointer;
  align-items: center;
  position: relative;

  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 7px 14px;
  /* .active {
    position: relative;
    background-color: ${(props) => props.theme.colors.highlight1};
    width: calc(100% + 4px);
    height: 4px;
    border-radius: 2px;
  }
  .inactive {
    width: 0px;
  } */
`;

const TabName = styled.p`
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 20px;
  margin-bottom: 1px;
`;

const Underline = styled.div``;

const AscentsContainer = styled.div`
  display: flex;
`;

const NoData = styled(ColumnWrapper)``;

const Ascent = styled(RowWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  background-color: ${(props) => props.theme.colors.highlight2};
  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 15px;
`;

const FirstColumn = styled(ColumnWrapper)`
  align-items: center;
  .flash {
    color: #0fa973;
  }
`;
