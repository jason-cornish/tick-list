import React, { useMemo } from "react";
import styled from "styled-components";
import {
  ColumnWrapper,
  GreyText,
  RowWrapper,
} from "../../../reusable/styled-components";
import AscentType from "./models/ascent";

const ProfileHighlights = (props: any) => {
  const { profile } = props;

  const maxBoulderGrade = useMemo(() => {
    const boulders = profile.ascents.filter((ascent: AscentType) => {
      return ascent.routeType === "boulder";
    });

    return Math.max(...boulders.map((ascent: AscentType) => ascent.grade)) || 0;
  }, [profile.ascents]);

  return (
    <ProfileHighlightsWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>V{maxBoulderGrade}</h1>
          <GreyText>Top Boulder</GreyText>
        </Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>{profile.maxRoute}</h1>
          <GreyText>Top Route</GreyText>
        </Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>{profile.totalAscents}</h1>
          <GreyText>Total Ascents</GreyText>
        </Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>
            {profile.bestAngle}
            {"\u00b0"}
          </h1>
          <GreyText>Best Angle</GreyText>
        </Highlight>
      </HighlightWrapper>
      <DataVisualizations></DataVisualizations>
    </ProfileHighlightsWrapper>
  );
};

export default ProfileHighlights;

const ProfileHighlightsWrapper = styled(RowWrapper)`
  column-gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: 15px;
  @media only screen and (max-width: 1200px) {
    column-gap: 15px;
    row-gap: 15px;
  }
`;

const HighlightWrapper = styled(ColumnWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  height: 111px;
  box-sizing: border-box;
  align-items: center;
  row-gap: 5px;
  h3 {
    font-size: 16px;
  }
`;

const Highlight = styled(ColumnWrapper)`
  padding: 20px 25px;
  row-gap: 10px;
  h1 {
    font-size: 35px;
    margin-top: -3px;
  }
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
`;

const DataVisualizations = styled(ColumnWrapper)``;
