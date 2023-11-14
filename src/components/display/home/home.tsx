import React, { useState } from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";
import JasonCompressed from "../../../assets/JasonCompressed.jpg";
import Chart from "./chart";
import ProfileHighlights from "../ascents/profile-highlights";
import SpiderChart from "./spider-chart/spider-chart";
import SpiderChartContainer from "./spider-chart/chart-wrapper";

const Profile = () => {
  return (
    <HomeWrapper>
      <CenteredDiv>
        <h1>Dashboard</h1>
        <SpiderChartContainer />
        <GreyText>Ascents per grade</GreyText>
        <ChartWrapper>
          <Chart />
        </ChartWrapper>
      </CenteredDiv>
    </HomeWrapper>
  );
};

export default Profile;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  @media only screen and (max-width: 850px) {
    padding: 15px;
  }
`;

const CenteredDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  width: 100%;
  row-gap: 15px;
  column-gap: 15px;
  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
  h1 {
    color: ${(props) => props.theme.colors.primaryWhite};
    font-size: 26px;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  box-shadow: ${(props) => props.theme.other.boxShadow};
  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 15px;
  padding-top: 35px;
  padding-right: 30px;
`;

const GreyText = styled.h3`
  color: ${(props) => props.theme.colors.grey};
  font-size: 20px;
  margin-bottom: 0px;
`;
