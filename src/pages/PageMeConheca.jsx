import Header from '../layout/Navbar/Header'
import MeConheca from '../layout/Apresentação/MeConheca'
import Contato from '../layout/Contato/Footer'
import WhatsappButton from '../layout/Botões/WhatsappButton'

const PageMeConheca = () => {
  return (
    <section className="position-relative">
      <Header />
      <MeConheca />
      <Contato />
      <WhatsappButton />
    </section>
  )
}

export default PageMeConheca