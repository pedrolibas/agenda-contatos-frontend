import styled from "styled-components";

export const DashboardStyled = styled.div`
  width: 100vw;
  height: 100vh;

  section {
    width: 100%;
    height: 92%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      width: 30%;
      height: 40%;

      background-color: var(--color-gray-1);

      border-radius: 5px;
      border: 2px solid var(--color-purple);
    }
  }
`;
