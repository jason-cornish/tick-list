import React from "react";
import styled from "styled-components";
import { ColumnWrapper, RowWrapper } from "../../../reusable/styled-components";

const ProfileHighlights = (props: any) => {
  const { profile } = props;

  return (
    <ProfileHighlightsWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>{profile.maxBoulder}</h1>
        </Highlight>
        <h3>Max Boulder</h3>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>{profile.maxRoute}</h1>
        </Highlight>
        <h3>Max Route</h3>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>{profile.totalAscents}</h1>
        </Highlight>
        <h3>Total Ascents</h3>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <h1>
            {profile.bestAngle}
            {"\u00b0"}
          </h1>
        </Highlight>
        <h3>Best Angle</h3>
      </HighlightWrapper>
      <DataVisualizations></DataVisualizations>
    </ProfileHighlightsWrapper>
  );
};

export default ProfileHighlights;

const ProfileHighlightsWrapper = styled(RowWrapper)`
  column-gap: 15px;
  flex-wrap: wrap;
  row-gap: 15px;
  @media only screen and (max-width: 1200px) {
    column-gap: 15px;
    row-gap: 15px;
  }
`;

const HighlightWrapper = styled(ColumnWrapper)`
  color: ${(props) => props.theme.colors.primaryWhite};
  align-items: center;
  row-gap: 5px;
  h3 {
    font-size: 16px;
  }
`;

const Highlight = styled(RowWrapper)`
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.highlight2};
  border-radius: ${(props) => props.theme.other.borderRadius};
`;

const DataVisualizations = styled(ColumnWrapper)``;
