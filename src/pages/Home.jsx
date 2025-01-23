import IntroComponent from '../layout/IntroComponent'
import NossosServicos from '../layout/NossosServicos'
import Gallery from '../layout/Gallery'
import ChefaDomicilio from '../layout/ChefaDomicilio'
import WhatsappButton from '../layout/WhatsappButton'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div style={{ minHeight: '75vh' }} className="position-relative">
      <Header/>
      <IntroComponent />
      <ChefaDomicilio />
      <NossosServicos />
      <Gallery />
      <WhatsappButton />
      <Footer/>
    </div>
  )
}

export default Home
