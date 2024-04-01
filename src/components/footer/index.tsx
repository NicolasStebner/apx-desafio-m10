import { useRouter } from 'next/router'
import {Contenedor, InfoAndSocialNetworks, OnlyInfo, Redirect} from "./styled"
import { LargeText } from '@/ui/texts'

const Footer = () =>{
  const router = useRouter();
  return(
    <Contenedor>
      <InfoAndSocialNetworks>
        <OnlyInfo>
          <Redirect onClick={()=>router.push('/signin')}><LargeText>Ingresar</LargeText></Redirect>
          <Redirect onClick={()=>router.push('/profile')}><LargeText>Mi perfil</LargeText></Redirect>
          <Redirect onClick={()=>router.push('/search')}><LargeText>Buscar</LargeText></Redirect>
          <Redirect onClick={()=>router.push('/logout')}><LargeText>Logout</LargeText></Redirect>
        </OnlyInfo>
        <OnlyInfo>
          <Redirect>Redes</Redirect>
          <Redirect><i className="fa-brands fa-twitter"></i><LargeText>My E-commerce</LargeText></Redirect>
          <Redirect><i className="fa-brands fa-instagram"></i><LargeText>My E-commerce</LargeText></Redirect>
        </OnlyInfo>
      </InfoAndSocialNetworks>
      <div>
        <i className="fa-regular fa-copyright"></i> 2024 apx
      </div>
    </Contenedor>  
  )
}

export default Footer