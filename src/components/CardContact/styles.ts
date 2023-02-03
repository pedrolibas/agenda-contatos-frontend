import styled from "styled-components";

export const CardStyled = styled.li`
  width: 100%;

  background-color: var(--color-gray-1);

  border-bottom: 1px solid var(--color-purple);

  padding: 8px 0;

  .container-list {
    width: 90%;

    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    background-color: var(--color-gray-1);

    border: none;

    margin: 0 auto;
  }

  h3,
  h4,
  h5,
  h6 {
    color: var(--color-purple);
    font-weight: 600;
  }

  span {
    font-weight: 400;
  }
`;
