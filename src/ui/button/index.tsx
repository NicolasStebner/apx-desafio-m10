import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 5px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: ${(props)=>props.background};
`