import Header from '../layout/Navbar/Header'
import Menu from '../layout/Menu/Menu'
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
      <Menu/>
      <Parallax/>
      <Contato/>
      
    </div>
  )
}

export default Home
