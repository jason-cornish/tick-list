import React, { useMemo } from "react";
import styled from "styled-components";
import {
  ColumnWrapper,
  GreyText,
  RowWrapper,
} from "../../../reusable/styled-components";
import AscentType from "./models/ascent";
import Boulder from "../../../assets/stone.png";
import Mountain from "../../../assets/mountain.png";
import Ascent from "../../../assets/ascent.png";
import Protractor from "../../../assets/protractor.png";

const ProfileHighlights = (props: any) => {
  const { profile } = props;

  const maxBoulderGrade = useMemo(() => {
    const boulders = profile.ascents.filter((ascent: AscentType) => {
      return ascent.routeType === "Boulders";
    });

    return Math.max(...boulders.map((ascent: AscentType) => ascent.grade)) || 0;
  }, [profile.ascents]);

  return (
    <ProfileHighlightsWrapper>
      <HighlightWrapper>
        <Highlight>
          <img
            src={Boulder}
            alt="Illustration depicting a small boulder/rock"
          />
          <Column>
            <h1>V{maxBoulderGrade}</h1>
            <GreyText>Top Boulder</GreyText>
          </Column>
        </Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <img src={Mountain} alt="Illustration depicting a mountain" />
          <Column>
            <h1>{profile.maxRoute}</h1>
            <GreyText>Top Route</GreyText>
          </Column>
        </Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <img
            src={Ascent}
            className="ascent"
            alt="Illustration depicting a mountain with a flag on top"
          />
          <Column>
            <h1>{profile.totalAscents}</h1>
            <GreyText>Ascents</GreyText>
          </Column>
        </Highlight>
      </HighlightWrapper>
      <HighlightWrapper>
        <Highlight>
          <img
            src={Protractor}
            className="protractor"
            alt="Illustration depicting a protractor"
          />
          <Column>
            <h1>
              {profile.bestAngle}
              {"\u00b0"}
            </h1>
            <GreyText>Best Angle</GreyText>
          </Column>
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
  box-sizing: border-box;
  align-items: center;
  row-gap: 5px;
  h3 {
    font-size: 16px;
  }
`;

const Highlight = styled(RowWrapper)`
  padding: 0px 25px;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.other.boxShadow};
  height: 120px;
  h1 {
    font-size: 35px;
    margin-top: -3px;
  }
  img {
    object-fit: cover;
    width: 70px;
    height: 70px;
  }
  .ascent {
    width: 55px;
    height: 55px;
  }
  .protractor {
    width: 60px;
    height: 60px;
  }
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
`;

const Column = styled(ColumnWrapper)`
  row-gap: 5px;
`;

const DataVisualizations = styled(ColumnWrapper)``;
