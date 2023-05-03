import styled from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  margin: 32px 0;
  width: 90%;
  justify-content: center;
`

export const Input = styled.input`
  background-color: var(--input-background);
  padding: 14px 32px 14px 16px;
  border-radius: 8px 0 0 8px;
  box-shadow: 2px 2px 9px var(--shadow);
  outline: none;
  max-width: 320px;
  min-width: 180px;
  width: 100%;
  height: auto;
  border: none;
  color: var(--input-text);
  font-weight: 700;
  font-size: 15px;
`

export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 8px 8px 0;
  background-color: var(--graphite);
  color: var(--white);
  box-shadow: 2px 2px 9px var(--shadow);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--graphite-light);
  }
`
