import { Title, Subtitle, LargeText, LargeTextBold, BodyText, BodyTextBold, TinyText } from "@/ui/texts";
import { Button } from "@/ui/button";
import TextField from "@/ui/text-field";
import Card from "@/ui/card";
import fotoEjemplo from "@/assets/foto_ejemplo.png"
import React from "react";

const Ui = () =>{
  return (
    <div>
      <Title>Título</Title>
      <Subtitle>Subtítulo</Subtitle>
      <LargeText>Large Text</LargeText>
      <LargeTextBold>Large Text</LargeTextBold>
      <BodyText>Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis officiis illo nulla ipsum ab perferendis eligendi in laudantium veritatis asperiores, maiores reiciendis quibusdam repellendus tenetur dolore, animi dignissimos harum.</BodyText>
      <BodyTextBold>Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis consequatur perspiciatis laboriosam similique consequuntur ex dicta eos deserunt. Harum optio rerum repudiandae praesentium iure, accusantium atque doloribus quidem omnis?</BodyTextBold>
      <TinyText>Tiny text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet eros suscipi</TinyText>
      <Button background="var(--azul)">Texto del botón</Button>
      <Button background="var(--naranja)">Texto del botón</Button>
      <Button background="var(--fucsia)">Texto del botón</Button>
      <TextField label="Label" placeholder="placeholder"></TextField>
      <Card src={fotoEjemplo.src}  productName="product_name" price={444}></Card>
    </div>
  );
}

export default Ui