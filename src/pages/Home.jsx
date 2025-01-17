import IntroComponent from '../layout/IntroComponent'
import NossosServicos from '../layout/NossosServicos'
import Gallery from '../layout/Gallery'
import ChefaDomicilio from '../layout/ChefaDomicilio'

const Home = () => {
  return (
    <div style={{ minHeight: '75vh' }}>
      <IntroComponent />
      <ChefaDomicilio />
      <NossosServicos />
      <Gallery />
    </div>
  )
}

export default Home
