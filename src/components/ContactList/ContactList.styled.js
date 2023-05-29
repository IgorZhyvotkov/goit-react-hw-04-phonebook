import styled from '@emotion/styled';

export const ContactListStyle = styled.ul`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
  gap: 20px;
  align-items: center;
  padding: 0px 15px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;