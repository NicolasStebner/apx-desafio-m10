import { TypeCard } from "@/types";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 3px black;
  border-radius: 5px;
  /* max-width: 350px; */
  width: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 70%;
  src: ${(props)=>props.src};
`;

const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--fucsia);
`;

const CardProductName = styled.h3`
  font-size: 20px;
  font-weight: normal;
`;

const CardPrice = styled.h2`
  font-size: 32px;
`

const Card = ({ src, productName, price }: TypeCard) => {
  return (
    <CardContainer>
      <CardImage src={src}/>
      <CardInfoContainer>
        <CardProductName>{productName}</CardProductName>
        <CardPrice>${price}</CardPrice>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default Card;