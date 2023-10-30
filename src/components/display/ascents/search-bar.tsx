import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import React, { useContext } from "react";

type PropsTypes = {
  setSelectedFilters: React.Dispatch<React.SetStateAction<any>>;
  selectedFilters: object;
};

const SearchBar = (props: PropsTypes) => {
  const { setSelectedFilters, selectedFilters } = props;

  return (
    <SearchWrapper>
      <SearchInput>
        <StyledIcon icon="search" size={15} />
        <input
          onChange={(event) => {
            setSelectedFilters({
              ...selectedFilters,
              name: event.target.value,
            });
          }}
          placeholder="Filter by name..."
        />
        {/* {searchQuery.length >= 1 ? (
          <BackButton>
            <StyledIcon icon="cross" size={15} />
          </BackButton>
        ) : (
          <div></div>
        )} */}
      </SearchInput>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Archivo;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const SearchInput = styled.form`
  font-family: Archivo;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.highlight3};
  border-radius: 8px;
  border: 1px solid transparent;
  color: #fff !important;
  padding: 5px 10px;
  width: 250px;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
  height: 30px;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.primaryWhite};
    background-color: ${(props) => props.theme.colors.highlight3};
  }
  input {
    border: 0;
    height: inherit;
    background-color: ${(props) => props.theme.colors.highlight3};
    text-overflow: ellipsis;
    width: 100%;
    color: ${(props) => props.theme.colors.primaryWhite};
    &::placeholder {
      color: inherit;
    }
    &:focus {
      outline: none;
    }
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.primaryWhite};
  display: flex;
  align-items: center;
`;
