import React, { useState } from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";

const ProfileAscents = (props: any) => {
  const { profile } = props;

  const [selectedTab, setSelectedTab] = useState("recent");

  const renderAscents = () => {
    if (profile.ascents.length === 0) {
      return <NoData></NoData>;
    }
    return (
      <>
        {profile.ascents.map((ascent: any) => {
          return (
            <Ascent>
              <FirstColumn></FirstColumn>
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

const Ascent = styled(RowWrapper)``;

const FirstColumn = styled(ColumnWrapper)``;
