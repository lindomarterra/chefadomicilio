
import IntroComponent from "../layout/IntroComponent"
import Parallax from "../layout/Parallax"
import NossosServicos from '../layout/NossosServicos'
import Carousel from '../layout/Carousel'
import Gallery from '../layout/Gallery'
import Aside from '../layout/Aside'


const Home = () => {
  return (
    <div style={{ minHeight: '75vh' }}>
      <IntroComponent />
      <Parallax />
      <Carousel />
      <NossosServicos />
      <Gallery />
      <Aside />
    </div>
  )
    
}

export default Home
