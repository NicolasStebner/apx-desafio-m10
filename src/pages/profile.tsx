import Layout from "@/components/layout"
import { Title } from "@/ui/texts"
import TextField from "@/ui/text-field"
import { Button } from "@/ui/button"
import style from "@/pages/css/profile.module.css"

const Profile = () =>{
  return <Layout>
    <div className={style.contenedor}>
      <Title>Perfil</Title>
      <TextField label="Nombre Completo" placeholder=""></TextField>
      <TextField label="Dirección" placeholder=""></TextField>
      <TextField label="Teléfono" placeholder=""></TextField>
      <Button background="var(--naranja)" color="black">Guardar</Button>
    </div>
  </Layout>
}

export default Profile