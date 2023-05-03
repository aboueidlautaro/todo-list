import styled from "styled-components"

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-height: 420px;
  overflow-y: auto;
  margin-bottom: 20px;
  max-width: 430px;
  width: 100%;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  margin: 4px auto;
  color: var(--graphite-light);
  background-color: var(--white);
  opacity: ${({ completed }) => `${completed ? "0.4" : "1"}`};
  padding: 16px;
  border-radius: 8px;
  max-width: 438px;
  width: 90%;
  min-height: 52px;
  font-weight: 500;
  box-shadow: 2px 2px 9px var(--shadow);
  word-break: break-all;
`
