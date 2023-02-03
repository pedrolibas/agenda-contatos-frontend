import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 65%;
    height: 60%;

    display: flex;

    background-color: var(--color-gray-1);

    border-radius: 3px;
  }

  .container-side {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-purple);

    h2{
      font-size: 2.8125rem;
      font-weight: 900;
      color: var(--color-gray-1);
      text-align: center;
    }
  }

  .container-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3.75rem;

    width: 50%;

    h1 {
      color: var(--color-purple);
      font-weight: 900;
      font-size: 2.1875rem;
    }
  }
`;

