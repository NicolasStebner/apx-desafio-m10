import styled from "styled-components"

export const Contenedor = styled.header`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const IngresarContenedor = styled.div`
  display: none;
  @media (min-width: 425px){
    display: initial;
  }
`

export const Hamburguer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  @media (min-width: 425px){
    display: none;
  }
`

export const VentanaEmergencia = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  align-items: center;
  background-color: black;
  padding: 20px;
  color: white;
`

export const VentanaCerrar = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
  justify-content: flex-end;
`

export const VentanaContenedorOpciones = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`