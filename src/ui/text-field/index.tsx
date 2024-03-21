import { TypeTextField } from '@/types';
import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor del input
const InputContainer = styled.div``;

// Estilos para la etiqueta del input
const Label = styled.label`
  font-weight: normal;
  font-size: 12px;
`;

// Estilos para el input
const InputField = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 3px solid black;
  width: 100%;
  font-size: 16px;
`;


// Componente de Input
const TextField = ({ label, placeholder }: TypeTextField) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField type="text" placeholder={placeholder} />
    </InputContainer>
  );
};

export default TextField;