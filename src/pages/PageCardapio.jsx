import Header from "../layout/Navbar/Header.jsx"
import Parallax from '../layout/Menu/Parallax.jsx'
import Contato from '../layout/Contato/Footer.jsx'
import WhatsappButton from '../layout/Botões/WhatsappButton'



const PageCardapio = () => {
  return (
    <section >
      <Header />
      <Parallax />
      <Contato />
      <WhatsappButton />
    </section>
  )
}

export default PageCardapio