import styled from "styled-components";
import Button from "../../reusable/button";
import { RowWrapper } from "../../reusable/styled-components";

const User = () => {
  return (
    <UserWrapper>
      <AcctIcon>
        <h3>JC</h3>
      </AcctIcon>
    </UserWrapper>
  );
};

export default User;

const UserWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  column-gap: 10px;
  @media only screen and (max-width: 980px) {
    p {
      display: none;
    }
  }
`;

const AcctIcon = styled.div`
  padding: 7px;
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
