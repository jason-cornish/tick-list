import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <SearchWrapper>
      <ButtonWrapper>
        <BackButton>
          <StyledIcon title="Go Back" icon="chevron-left" size={20} />
        </BackButton>
        <BackButton>
          <StyledIcon title="Go Forward" icon="chevron-right" size={20} />
        </BackButton>
      </ButtonWrapper>
      <SearchInput>
        <StyledIcon icon="search" size={15} />
        <input
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Search climbs or profiles..."
        />
        {search.length >= 1 ? (
          <BackButton>
            <StyledIcon icon="cross" size={15} />
          </BackButton>
        ) : (
          <div></div>
        )}
      </SearchInput>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 0 15px;
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

const BackButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.highlight2};
  padding: 5px;
  border-radius: 999px;
  &:hover {
    cursor: pointer;
  }
`;
