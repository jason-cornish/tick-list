import { Icon } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../../App";
import Button from "../../../reusable/button";
import ConfirmModal from "../../../reusable/delete-modal";
import {
  ColumnWrapper,
  GreyText,
  RowWrapper,
} from "../../../reusable/styled-components";
import SearchBar from "./search-bar";
import AscentType from "./models/ascent";
import DeleteModal from "../../../reusable/delete-modal";
import Toggle from "../../../reusable/toggle-button";
import FiltersModal from "../../../reusable/filters-modal";

interface SelectedFilters {
  maxAttempts: number | string;
  grade: boolean | number;
  routeType: string | boolean;
  angle: any;
  name: string;
}

type AscentProps = {
  delay: number;
};

const ProfileAscents = (props: any) => {
  const { setShowGreyLayer } = useContext(DataContext);
  const { profile, setProfile } = props;

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    maxAttempts: "Any",
    grade: false,
    routeType: "Boulders",
    angle: [],
    name: "",
  });
  const [selectedAscents, setSelectedAscents] = useState<any>([]);
  const [displayModal, setDisplayModal] = useState({
    deleteModal: false,
    editModal: false,
    filtersModal: false,
  });

  const stringifyAttempts = (attemptCount: number) => {
    return attemptCount === 1 ? "FLASH" : `${attemptCount} Tries`;
  };

  const stringifyGrade = (grade: number, routeType: string) => {
    return routeType === "Boulders" ? `V${grade}` : `5.${grade}`;
  };

  /*filters out ascents that do not meet selected filter criteria*/
  const validateAscent = (ascent: AscentType) => {
    let ascentValid = selectedFilters.routeType === ascent.routeType;
    // ? ascent.routeType === selectedFilters.routeType
    // : true;

    if (ascentValid && selectedFilters.name) {
      ascentValid = ascent.name.includes(selectedFilters.name);
    }
    if (ascentValid && selectedFilters.grade) {
      ascentValid = ascent.grade === selectedFilters.grade;
    }
    if (ascentValid && selectedFilters.maxAttempts !== "Any") {
      ascentValid = ascent.attempts >= selectedFilters.maxAttempts;
    }
    if (ascentValid && selectedFilters.angle.length > 0) {
      ascentValid = selectedFilters.angle.includes(ascent.angle);
    }
    return ascentValid;
  };

  const handleAscentClick = (ascentID: number) => {
    if (selectedAscents.includes(ascentID)) {
      setSelectedAscents([
        ...selectedAscents.filter((currentAscentID: number) => {
          return currentAscentID !== ascentID;
        }),
      ]);
      return;
    }
    setSelectedAscents([...selectedAscents, ascentID]);
  };

  const renderAscents = () => {
    if (profile.ascents.length === 0) {
      return <NoData></NoData>;
    }
    const filteredAscents = profile.ascents.filter((ascent: AscentType) => {
      return validateAscent(ascent);
    });
    return (
      <>
        {filteredAscents.map((ascent: any, i: number) => {
          const delay = 100 * (i + 1);
          const date = new Date(ascent.date * 1000).toDateString().split(" ");
          date.shift();

          const joinedDate = date.join(" ");
          const flashed = ascent.attempts === 1;
          return (
            <Ascent
              onClick={() => {
                handleAscentClick(ascent.id);
              }}
              className={
                selectedAscents.includes(ascent.id) ? "selected" : "unselected"
              }
              delay={delay}
              key={ascent.id}
            >
              <LeftColumn>
                <h1>{stringifyGrade(ascent.grade, ascent.routeType)}</h1>

                <span>
                  {/* {flashed ? (
                    <Icon icon="lightning" className="lightning" />
                  ) : (
                    <div />
                  )} */}
                  <h2 className={flashed ? "flash" : "non-flash"}>
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
              <OptionsWrapper>
                <Icon icon="more" size={22} />
              </OptionsWrapper>
            </Ascent>
          );
        })}
      </>
    );
  };

  const openModal = (modalName: string, showGreyLayer: boolean) => {
    if (showGreyLayer) {
      setShowGreyLayer(true);
    }
    setDisplayModal({ ...displayModal, [modalName]: true });
  };

  const deleteAscents = () => {
    const filteredAscents = profile.ascents.filter((ascent: AscentType) => {
      return !selectedAscents.includes(ascent.id);
    });
    setProfile({ ...profile, ascents: filteredAscents });
  };

  const applyFilters = () => {};

  return (
    <ProfileAscentsWrapper>
      <DeleteModal
        selectedAscents={selectedAscents}
        setSelectedAscents={setSelectedAscents}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        setShowGreyLayer={setShowGreyLayer}
        deleteAscents={deleteAscents}
      />
      <FiltersModal
        confirmChanges={applyFilters}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        setShowGreyLayer={setShowGreyLayer}
        state={selectedFilters}
      />

      <ControlsRow>
        {/* <GreyText>Ascents</GreyText> */}
        <RowWrapper className="controlsRow">
          <RowWrapper>
            <SearchBar
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <Button
              icon={<Icon icon="filter" size={16} />}
              text="Filter"
              onClick={() => openModal("filtersModal", true)}
              type="regular"
            />
            <Button
              icon={<Icon icon="trash" />}
              text="Delete"
              onClick={() => openModal("deleteModal", true)}
              type="regular"
            />
          </RowWrapper>
        </RowWrapper>
      </ControlsRow>

      <SelectorWrapper>
        <AscentsContainer>{renderAscents()}</AscentsContainer>
      </SelectorWrapper>
    </ProfileAscentsWrapper>
  );
};

export default ProfileAscents;

const ProfileAscentsWrapper = styled(ColumnWrapper)`
  column-gap: 25px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
  box-shadow: ${(props) => props.theme.other.boxShadow};
`;

const ControlsRow = styled(ColumnWrapper)`
  margin-bottom: 20px;
  align-items: space-between;
  div {
    column-gap: 10px;
  }
  .controlsRow {
    column-gap: 10px;
  }
`;

const Dropdown = styled(ColumnWrapper)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
  box-shadow: ${(props) => props.theme.other.boxShadow};
  position: absolute;
  top: 40px;
  height: 100px;
  z-index: 2;
`;

const SelectorWrapper = styled(RowWrapper)`
  column-gap: 20px;
`;

const AscentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  .selected {
    border: 2px solid ${(props) => props.theme.colors.highlight1};
    background-color: ${(props) => props.theme.colors.highlight4};
  }
  .unselected {
    box-shadow: ${(props) => props.theme.other.boxShadow};
    border: 2px solid ${(props) => props.theme.colors.primaryBlack};
    background-color: ${(props) => props.theme.colors.highlight3};
    :hover {
      background-color: ${(props) => props.theme.colors.highlight4};
      border: 2px solid ${(props) => props.theme.colors.primaryBlack};
    }
  }
`;

const OptionsWrapper = styled(RowWrapper)`
  position: absolute;
  right: 10px;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.other.borderRadius};
  /* transform: rotate(90deg); */
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.highlight3};
  .bp5-icon {
    fill: ${(props) => props.theme.colors.primaryWhite};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.secondaryBlack};
  }
`;

const NoData = styled(ColumnWrapper)``;

const Ascent = styled(RowWrapper)<AscentProps>`
  position: relative;
  color: ${(props) => props.theme.colors.primaryWhite};
  /* background-color: ${(props) => props.theme.colors.highlight3}; */
  border-radius: ${(props) => props.theme.other.borderRadius};
  border: 0px;
  padding: 10px 25px 10px 20px;
  column-gap: 15px;
  align-items: center;
  transition: background-color 300ms linear;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 500ms ease-in ${(props) => `${props.delay}ms`} forwards;
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  /* @media only screen and (max-width: 980px) {
    width: 100%;
  } */
`;

const LeftColumn = styled(ColumnWrapper)`
  align-items: center;
  min-width: 65px;
  h1 {
    font-size: 26px;
  }
  .flash {
    font-size: 16px;
    color: #0fa973;
    font-weight: 600;
  }
  .non-flash {
    font-size: 16px;
    color: ${(props) => props.theme.colors.primaryWhite};
  }
  span {
    display: flex;
    align-items: center;
  }
  .lightning {
    fill: #0fa973;
  }
`;

const Divider = styled(ColumnWrapper)`
  height: 65px;
  width: 1px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primaryWhite};
`;

const RightColumn = styled(ColumnWrapper)`
  row-gap: 4px;
  min-width: 220px;
  margin-left: 5px;
  .name {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
  .date {
    margin-top: 2px;
    font-size: 14px;
  }
`;
