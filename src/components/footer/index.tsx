import { useRouter } from 'next/router'
import {Contenedor, InfoAndSocialNetworks, OnlyInfo, Redirect} from "./styled"

const Footer = () =>{
  const router = useRouter();
  return(
    <Contenedor>
      <InfoAndSocialNetworks>
        <OnlyInfo>
          <Redirect onClick={()=>router.push('/login')}>Ingresar</Redirect>
          <Redirect onClick={()=>router.push('/profile')}>Mi perfil</Redirect>
          <Redirect onClick={()=>router.push('/search')}>Buscar</Redirect>
          <Redirect onClick={()=>router.push('/logout')}>Logout</Redirect>
        </OnlyInfo>
        <OnlyInfo>
          <Redirect>Redes</Redirect>
          <Redirect><i className="fa-brands fa-twitter"></i> My E-commerce</Redirect>
          <Redirect><i className="fa-brands fa-instagram"></i> My E-commerce</Redirect>
        </OnlyInfo>
      </InfoAndSocialNetworks>
      <div>
        <i className="fa-regular fa-copyright"></i> 2024 apx
      </div>
    </Contenedor>  
  )
}

export default Footer