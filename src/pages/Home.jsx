import Header from '../layout/Navbar/Header'
import Galeria from '../layout/Menu/Galeria'
import IntroComponent from '../layout/Apresentação/IntroComponent'

import ChefaDomicilio from '../layout/Apresentação/ChefaDomicilio'
import NossosServicos from '../layout/Apresentação/NossosServicos'
import Contato from '../layout/Contato/Footer'
import Parallax from '../layout/Menu/Parallax'

import Backtothetop from '../layout/Botões/BackToTheTop'
import { useState } from 'react'


const Home = () => {

  const [btnShow, setBtnShow]=useState(false)

  const showBtn= ()=>{    
    setTimeout(() => {
      setBtnShow(true)
    }, 1000);    
  }

  const hideBtn= ()=>{
    setBtnShow(false)
  }

  return (
    <div style={{ minHeight: '75vh' }} className="position-relative" >
      <Header />
      <IntroComponent showBtn={showBtn} />
      <ChefaDomicilio />
      <NossosServicos />
      <Galeria />
      <Parallax />
      <Contato />

      { btnShow ? 
      <span onClick={hideBtn}  >
        <Backtothetop hideBtn={hideBtn}  />
      </span> : '' }
      
    </div>
  )
}

export default Home
