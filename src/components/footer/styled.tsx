import styled from "styled-components";

export const Contenedor = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  gap: 20px;
`

export const InfoAndSocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const OnlyInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 7px;
`

export const Redirect = styled.p`
  margin: 0;
`