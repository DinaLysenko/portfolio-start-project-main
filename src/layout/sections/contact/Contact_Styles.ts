import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  border: 1px solid ${theme.color.inputBorder};
  background: ${theme.color.secondary};
  color: ${theme.color.font};
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;

  &:focus-visible {
    outline: 1px solid ${theme.color.inputBorder};
  }

  &::placeholder {
    color: ${theme.color.placeholderColor};
    text-transform: capitalize;
  }
`

export const S = {
    Form,
    Field
}