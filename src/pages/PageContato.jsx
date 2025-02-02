import Header from "../layout/Navbar/Header.jsx"
import Contato from '../layout/Contato/Footer.jsx'
import WhatsappButton from '../layout/Botões/WhatsappButton'

const PageContato = () => {
  return (
    <section style={{ minHeight: '75vh' }}>
      <Header />
      <Contato />
      <WhatsappButton />
    </section>
  )
}

export default PageContato