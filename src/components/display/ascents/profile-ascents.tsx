import { Icon } from "@blueprintjs/core";
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
          const date = new Date(ascent.date * 1000).toDateString().split(" ");
          date.shift();

          const joinedDate = date.join(" ");
          const flashed = ascent.attemptCount > 1;
          return (
            <Ascent>
              <LeftColumn>
                <h1>{stringifyGrade(ascent.grade, ascent.routeType)}</h1>
                <span>
                  <Icon icon="lightning" className="lightning" size={16} />
                  <h2 className={flashed ? "non-flash" : "flash"}>
                    {stringifyAttempts(ascent.attempts)}
                  </h2>
                </span>
              </LeftColumn>
              <Divider />
              <RightColumn>
                <h3 className="name">{ascent.name}</h3>
                <p>
                  {ascent.location} - {`${ascent.angle}\u00B0`}
                </p>
                <p className="date">{joinedDate}</p>
              </RightColumn>
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
          <TabName>Boulders</TabName>
          <Underline />
        </Tab>
        <Tab
          onClick={() => setSelectedTab("hardest")}
          className={selectedTab === "hardest" ? "active" : "inactive"}
        >
          <TabName>Routes</TabName>
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
    transition: background-color 300ms linear;
    background-color: ${(props) => props.theme.colors.highlight1};

    p {
      color: #fff;
    }
  }
  .inactive {
    transition: background-color 300ms linear;
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
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 15px;
`;

const NoData = styled(ColumnWrapper)``;

const Ascent = styled(RowWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  background-color: ${(props) => props.theme.colors.highlight2};
  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 10px 25px 10px 20px;
  column-gap: 15px;
  align-items: center;
  transition: background-color 300ms linear;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.highlight3};
  }
`;

const LeftColumn = styled(ColumnWrapper)`
  height: 67px;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  h1 {
    font-size: 32px;
  }
  .flash {
    font-size: 20px;
    color: #0fa973;
  }
  .non-flash {
  }
  span {
    display: flex;
    align-items: center;
    column-gap: 2px;
  }
  .lightning {
    fill: #0fa973;
  }
`;

const Divider = styled(ColumnWrapper)`
  height: 65px;
  width: 2px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primaryWhite};
`;

const RightColumn = styled(ColumnWrapper)`
  row-gap: 4px;
  .name {
    font-size: 22px;
  }
  p {
    font-size: 14px;
  }
  .date {
    margin-top: 2px;
    font-size: 14px;
  }
`;
