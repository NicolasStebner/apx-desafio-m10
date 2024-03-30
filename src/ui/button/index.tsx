import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: ${(props)=>props.background};
`