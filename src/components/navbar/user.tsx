import styled from "styled-components";

const User = () => {
  return (
    <UserWrapper>
      <p>John Doe</p>
      <AcctIcon>
        <h3>J</h3>
      </AcctIcon>
    </UserWrapper>
  );
};

export default User;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  padding: 0 10px;
  gap: 8px;
`;

const AcctIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.highlight1};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
