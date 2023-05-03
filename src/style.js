import styled from "styled-components"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  min-height: 100vh;
  width: 100%;
`

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  max-width: 360px;
  text-align: center;

  background-image: -webkit-linear-gradient(
    0deg,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Text = styled.h4`
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: capitalize;
`

export const Lowercase = styled.span`
  text-transform: lowercase;
`
export const DeleteButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  color: var(--error);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ primary }) => `${primary ? "red" : "black"}`};
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
