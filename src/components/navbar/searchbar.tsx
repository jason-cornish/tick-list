import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { DataContext } from "../../App";
import React, { useContext } from "react";

const SearchBar = (props: any) => {
  const { searchQuery, setSearchQuery } = useContext(DataContext);

  return (
    <SearchWrapper>
      <SearchInput>
        <StyledIcon icon="search" size={15} />
        <input
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
          placeholder="Search climbs or profiles..."
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
  padding: 15px;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const SearchInput = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.highlight2};
  border-radius: 10px;
  border: 1px solid transparent;
  color: #fff !important;
  padding: 5px 10px;
  width: 400px;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
  height: 30px;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.primaryWhite};
  }
  input {
    border: 0;
    height: inherit;
    background-color: ${(props) => props.theme.colors.highlight2};
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
