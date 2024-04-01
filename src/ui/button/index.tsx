import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 10px;
  width: 100%;
  border-radius: 8px;
  border: none;
  color: ${(props)=>props.color || "white"};
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props)=>props.background};
`