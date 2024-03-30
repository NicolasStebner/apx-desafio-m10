import { Contenedor, IngresarContenedor, Hamburguer, VentanaEmergencia, VentanaCerrar, VentanaContenedorOpciones} from "./styled"
import { Button } from "@/ui/button";
import { Icon } from "@/ui/icon";
import { useState } from "react";
import { Title } from "@/ui/texts";
import { useRouter } from "next/router";
const Header = () =>{
  const [ventana, setVentana] = useState(false)
  const router = useRouter();

  const toggleVentana = () => {
    setVentana(!ventana)
  }
  
  return (
    <>
      {ventana ? 
        <VentanaEmergencia>
          <VentanaCerrar onClick={toggleVentana}>X</VentanaCerrar>
          <VentanaContenedorOpciones>
            <Title onClick={()=> router.push('/login')}>Ingresar</Title>
            <Title onClick={()=> router.push('/profile')}>Mi perfil</Title>
            <Title onClick={()=> router.push('/search')}>Buscar</Title>
          </VentanaContenedorOpciones>
        </VentanaEmergencia>
      :
      <Contenedor>
          <Icon></Icon>
          <IngresarContenedor>
            <Button background="var(--fucsia)">Ingresar</Button>
          </IngresarContenedor>
          <Hamburguer onClick={toggleVentana}>
            <i className="fa-solid fa-bars fa-2xl"></i>
          </Hamburguer>
          </Contenedor>
      }
    </>
  );
}

export default Header