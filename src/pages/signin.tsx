import Layout from "@/components/layout"
import { Title, TinyText } from "@/ui/texts"
import TextField from "@/ui/text-field"
import { Button } from "@/ui/button"
import { useState } from "react"
import style from "@/pages/css/signin.module.css"

const Signin = () =>{
  const [codigoEnviado, setCodigoEnviado] = useState(false)
  return <Layout>
    <div className={style.contenedor}>
      {
        codigoEnviado
        ?
        <>
          <Title>Código</Title>
          <TextField label="" placeholder="12345"></TextField>
          <TinyText>Te envíamos un código a tu mail</TinyText>
          <Button onClick={()=>setCodigoEnviado(true)} color="black" background="var(--naranja)">Ingresar</Button>
        </>
        :
        <>
          <Title>Ingresar</Title>
          <TextField label="Email" placeholder=""></TextField>
          <Button onClick={()=>setCodigoEnviado(true)} color="black" background="var(--naranja)">Continuar</Button>
        </>
      }
    </div>
  </Layout>
}

export default Signin