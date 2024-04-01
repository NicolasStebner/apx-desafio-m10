import Footer from "@/components/footer"
import Header from "@/components/header"
import { Contenedor } from "./styled"
import { Body } from "../body"

const Layout = ({children}: any) =>{
  return <Contenedor>
    <Header></Header>
      <Body>
        {children}
      </Body>
    <Footer></Footer>
  </Contenedor>
}

export default Layout