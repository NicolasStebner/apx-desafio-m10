import Layout from "@/components/layout"
import { Title, Subtitle } from "@/ui/texts"
import { Button } from "@/ui/button"
import Card from "@/ui/card"
import TextField from "@/ui/text-field"
import style from "@/pages/css/index.module.css"
import { useEffect } from "react"

const Home = () =>{
  return <Layout>
    <div className={style.contenedorSearch}>
      <Title>El mejor e-commerce</Title>
      <TextField label="" placeholder="Encontrá tu producto ideal"></TextField>
      <Button background="var(--azul)">Buscar</Button>
    </div>
    <div className={style.contenedorProductosDestacados}>
      <Subtitle>Productos destacados</Subtitle>
      <div className={style.contenedorCards}>
        <Card price={111}productName="falopa"src=""key="1"></Card>
        <Card price={111}productName="falopa"src=""key="1"></Card>
      </div>
    </div>
  </Layout>
}

export default Home