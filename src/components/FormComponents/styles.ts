import styled from "styled-components";

export const InputStyled = styled.input`
  height: 1.4375rem;

  border: 1px solid var(--color-gray-3);
  border-radius: 3px;
`;

export const SpanFormStyled = styled.span`
  font-size: 12px;
  color: var(--color-red);
`;

export const ButtonFormStyled = styled.button`
  width: 60%;
  height: 1.875rem;

  background-color: var(--color-purple);

  border: 1px solid var(--color-purple);
  border-radius: 3px;

  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-gray-1);

  margin: 0 auto;

  cursor: pointer;

  &:hover {
    transition: 400ms;
    background-color: var(--color-gray-1);
    color: var(--color-purple);
  }
`;

export const LabelStyled = styled.label`
  font-size: 13px;
  font-weight: 400;
`;

export const FormStyled = styled.form`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;
