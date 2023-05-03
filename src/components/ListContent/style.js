import styled from "styled-components"

export const Text = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: ${({ completed }) =>
    `${completed ? "line-through" : "none"}`};
`
