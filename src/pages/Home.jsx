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
      <span className='position-fixed bottom-0 start-0' ><BackToTheTop/></span>
      <span className='position-fixed end-0 bottom-0' ><WhatsappButton/></span>
    </div>
  )
}

export default Home
