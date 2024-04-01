import Layout from "@/components/layout"
import { Title, TinyText} from "@/ui/texts"
import { Button } from "@/ui/button"
import { useRouter } from "next/router"
import style from "@/pages/css/item.module.css"

const ItemById = () =>{
  // const {itemId} = useRouter().query

  return <Layout>
    <div className={style.contenedor}>
      <div>foto</div>
      <div className={style.contenedorInfo}>
        <Title>Reloj super piola</Title>
        <Title>$101010</Title>
        <Button background="var(--celeste)" color="black">Comprar</Button>
        <TinyText>Descripción: Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Odio ipsum in voluptates! Magni, ut asperiores labore sapiente amet 
          praesentium officia nobis, atque nihil ratione odio, 
          illum molestiae perferendis doloribus enim?
        </TinyText>
      </div>
    </div>
  </Layout>
}

export default ItemById