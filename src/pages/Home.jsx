import IntroComponent from '../layout/IntroComponent'
import NossosServicos from '../layout/NossosServicos'
import Gallery from '../layout/Gallery'
import ChefaDomicilio from '../layout/ChefaDomicilio'
import BackToTheTop from '../layout/BackToTheTop'
import WhatsappButton from '../layout/WhatsappButton'

const Home = () => {


  return (
    <div style={{ minHeight: '75vh' }} className="position-relative">
      <IntroComponent />
      <ChefaDomicilio />
      <NossosServicos />
      <Gallery />
      <BackToTheTop/>
      <WhatsappButton/>
    </div>
  )
}

export default Home
