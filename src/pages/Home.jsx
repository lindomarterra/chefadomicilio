import Header from '../layout/Navbar/Header'
import Galeria from '../layout/Menu/Galeria'
import IntroComponent from '../layout/Apresentação/IntroComponent'
import ChefaDomicilio from '../layout/Apresentação/ChefaDomicilio'
import NossosServicos from '../layout/Apresentação/NossosServicos'
import Contato from '../layout/Contato/Footer'
import Parallax from '../layout/Menu/Parallax'
import Backtothetop from '../layout/Botões/BackToTheTop'
import WhatsappButton from '../layout/Botões/WhatsappButton'

import { useState } from 'react'



const Home = () => {

  const [btnShow, setBtnShow]=useState(false)

  const showBtn= ()=>{    
    setTimeout(() => {
      setBtnShow(true)
    }, 2000);    
  }

  const hideBtn= ()=>{
    setBtnShow(false)
  }


  return (
    <div className="position-relative" >
      <Header showBtn={showBtn} />
      <IntroComponent hideBtn={hideBtn} showBtn={showBtn} />
      <ChefaDomicilio /> 
      <NossosServicos />
      <Galeria />
      <Parallax />
      <Contato />
      <WhatsappButton />
      {btnShow ? (
        <span onClick={hideBtn}>
          <Backtothetop />
        </span>
      ) : (
        null
      )
    }
    </div>
  )
}

export default Home
