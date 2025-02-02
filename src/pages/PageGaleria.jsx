import Header from '../layout/Navbar/Header'
import Galeria from  '../layout/Menu/Galeria.jsx'
import Contato from '../layout/Contato/Footer.jsx'
import WhatsappButton from '../layout/Botões/WhatsappButton'

const PageGaleria = () => {
  return (
    <section style={{backgroundColor: '#fff'}} >
      <Header />
      <Galeria />
      <Contato />
      <WhatsappButton />
    </section>
  )
}

export default PageGaleria
