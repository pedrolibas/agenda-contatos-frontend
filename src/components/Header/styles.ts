import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 8%;

  background-color: var(--color-black);

  div {
    width: 85%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    color: var(--color-gray-1);
    font-size: 20px;
    font-weight: 300;
  }

  button {
    width: 8%;

    background-color: var(--color-purple);

    border: 1px solid var(--color-purple);
    border-radius: 3px;

    color: var(--color-gray-1);
    font-size: 0.9375rem;

    cursor: pointer;

    &:hover {
      transition: 400ms;
      background-color: var(--color-gray-1);
      color: var(--color-purple);
    }
  }

  @media (max-width: 470px){
    button{
      width: 20%;
    }
  }
`;
