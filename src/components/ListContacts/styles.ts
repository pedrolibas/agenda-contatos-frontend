import styled from "styled-components";

export const ListStyled = styled.ul`
  width: 50%;
  max-height: 80%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: var(--color-gray-1);

  border: 2px solid var(--color-purple);
  border-radius: 5px;

  overflow-y: scroll;
`;
