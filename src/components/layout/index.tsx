import Footer from "@/components/footer"
import Header from "@/components/header"

const Layout = ({children}: any) =>{
  return <>
    <Header></Header>
      {children}
    <Footer></Footer>
  </>
}

export default Layout