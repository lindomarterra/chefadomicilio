import Header from '../layout/Navbar/Header'
import Menu from '../layout/Menu/Menu'
import IntroComponent from '../layout/Apresentação/IntroComponent'


import Contato from '../layout/Contato/Footer'
import ChefaDomicilio from '../layout/Apresentação/ChefaDomicilio'



const Home = () => {
  return (
    <div style={{ minHeight: '75vh' }} className="position-relative">
      <Header/>
      <IntroComponent/>
       <ChefaDomicilio/>

      <Menu/>



      <Contato/>
      
    </div>
  )
}

export default Home
