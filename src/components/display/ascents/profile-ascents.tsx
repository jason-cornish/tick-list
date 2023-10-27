import { Icon } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../../App";
import Button from "../../../reusable/button";
import ConfirmModal from "../../../reusable/confirm-modal";
import {
  ColumnWrapper,
  GreyText,
  RowWrapper,
} from "../../../reusable/styled-components";
import SearchBar from "./search-bar";
import AscentType from "./models/ascent";

interface SelectedFilters {
  attempts: boolean | number;
  grade: boolean | number;
  routeType: string;
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
    attempts: false,
    grade: false,
    routeType: "boulder",
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
    return routeType === "boulder" ? `V${grade}` : `5.${grade}`;
  };

  /*filters out ascents that do not meet selected filter criteria*/
  const validateAscent = (ascent: AscentType) => {
    let ascentValid = ascent.routeType === selectedFilters.routeType;

    if (ascentValid && selectedFilters.name) {
      ascentValid = ascent.name.includes(selectedFilters.name);
    }
    if (ascentValid && selectedFilters.grade) {
      ascentValid = ascent.grade === selectedFilters.grade;
    }
    if (ascentValid && selectedFilters.attempts) {
      ascentValid = ascent.attempts >= selectedFilters.attempts;
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
            </Ascent>
          );
        })}
      </>
    );
  };

  const openModal = (modalName: string) => {
    setShowGreyLayer(true);
    setDisplayModal({ ...displayModal, [modalName]: true });
  };

  const deleteAscents = () => {
    const filteredAscents = profile.ascents.filter((ascent: AscentType) => {
      return !selectedAscents.includes(ascent.id);
    });
    setProfile({ ...profile, ascents: filteredAscents });
  };

  return (
    <ProfileAscentsWrapper>
      <ConfirmModal
        selectedAscents={selectedAscents}
        setSelectedAscents={setSelectedAscents}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        setShowGreyLayer={setShowGreyLayer}
        deleteAscents={deleteAscents}
      />
      <ConfirmModal
        selectedAscents={selectedAscents}
        setSelectedAscents={setSelectedAscents}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        setShowGreyLayer={setShowGreyLayer}
        deleteAscents={deleteAscents}
      />

      <ControlsRow>
        <GreyText style={{ marginBottom: "20px" }}>Ascents</GreyText>
        <SearchBar
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <Button
          icon={<Icon icon="add" />}
          text="Log Ascent"
          onClick={() => openModal("filterModal")}
          type="regular"
        />
        <Button
          icon={<Icon icon="filter" />}
          text="Filter Ascents"
          onClick={() => openModal("filterModal")}
          type="regular"
        />
        {/* <Button
          icon={<Icon icon="edit" />}
          text="Edit"
          onClick={editSelected}
          type="regular"
        /> */}
        <Button
          icon={<Icon icon="trash" />}
          text="Delete Ascents"
          onClick={() => openModal("deleteModal")}
          type="regular"
        />
      </ControlsRow>

      <SelectorWrapper>
        <TabRow>
          <Tab
            onClick={() => {
              setSelectedAscents([]);
              setSelectedFilters({ ...selectedFilters, routeType: "boulder" });
            }}
            className={
              selectedFilters.routeType === "boulder" ? "active" : "inactive"
            }
          >
            <TabName>Boulders</TabName>
          </Tab>
          <Tab
            onClick={() => {
              setSelectedAscents([]);
              setSelectedFilters({ ...selectedFilters, routeType: "route" });
            }}
            className={
              selectedFilters.routeType === "route" ? "active" : "inactive"
            }
          >
            <TabName>Routes</TabName>
          </Tab>
        </TabRow>
        <Seperator />
        <AscentsContainer>{renderAscents()}</AscentsContainer>
      </SelectorWrapper>
    </ProfileAscentsWrapper>
  );
};

export default ProfileAscents;

const AbsoluteWrapper = styled.div``;

const ProfileAscentsWrapper = styled(ColumnWrapper)`
  column-gap: 25px;
  position: relative;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  border-radius: ${(props) => props.theme.other.borderRadius};
`;

const ControlsRow = styled(RowWrapper)`
  column-gap: 10px;
  margin-bottom: 20px;
  height: 40px;
`;

const Seperator = styled.div`
  background-color: ${(props) => props.theme.colors.primaryWhite};
  height: 100%;
  width: 2px;
  border-radius: 3px;
`;

const SelectorWrapper = styled(RowWrapper)`
  column-gap: 20px;
`;

const TabRow = styled(ColumnWrapper)`
  row-gap: 10px;
  .active {
    transition: background-color 300ms linear;
    background-color: ${(props) => props.theme.colors.highlight1};

    p {
      color: ${(props) => props.theme.colors.primaryBlack};
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
  padding: 5px 14px;
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
  margin-top: 3px;
`;

const Underline = styled.div``;

const AscentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  /* min-width: 690px;
  @media only screen and (min-width: 1500px) {
    max-width: 370px;
  } */
  .selected {
    border: 2px solid ${(props) => props.theme.colors.highlight1};
    background-color: ${(props) => props.theme.colors.highlight4};
  }
  .unselected {
    border: 2px solid ${(props) => props.theme.colors.highlight3};
    background-color: ${(props) => props.theme.colors.highlight3};
    :hover {
      background-color: ${(props) => props.theme.colors.highlight4};
    }
  }
`;

const NoData = styled(ColumnWrapper)``;

const Ascent = styled(RowWrapper)<AscentProps>`
  color: ${(props) => props.theme.colors.primaryWhite};
  /* background-color: ${(props) => props.theme.colors.highlight3}; */
  border-radius: ${(props) => props.theme.other.borderRadius};
  padding: 10px 25px 10px 20px;
  column-gap: 15px;
  align-items: center;
  transition: background-color 300ms linear;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 500ms ease-in ${(props) => `${props.delay}ms`} forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 980px) {
    width: 100%;
  }
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
  min-width: 180px;
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
