import Header from '../layout/Navbar/Header'
import Galeria from '../layout/Menu/Galeria'
import IntroComponent from '../layout/Apresentação/IntroComponent'

import ChefaDomicilio from '../layout/Apresentação/ChefaDomicilio'
import NossosServicos from '../layout/Apresentação/NossosServicos'
import Contato from '../layout/Contato/Footer'
import Parallax from '../layout/Menu/Parallax'



const Home = () => {
  return (
    <div style={{ minHeight: '75vh' }} className="position-relative">
      <Header/>
      <IntroComponent/>
      <ChefaDomicilio/>
      <NossosServicos/>
      <Galeria/>
      <Parallax/>
      <Contato/>
      
    </div>
  )
}

export default Home
