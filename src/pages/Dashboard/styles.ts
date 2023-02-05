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

  @media (max-width: 690px) {
    section{
      flex-direction: column-reverse;
      
    div{
      width: 70%;
      height: 40%;
    }
    }
  }

  @media (max-width: 470px){
    section{
    div{
      width: 90%;
    }
    }
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--color-purple);
    font-weight: 900;
    font-size: 6.25rem;
  }
`;
