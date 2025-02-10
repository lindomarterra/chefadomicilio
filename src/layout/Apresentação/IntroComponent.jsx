import './IntroComponent.css'
import { Link } from 'react-scroll'
import Rosy from '../../images/icon/rosy.png'
import Klamt from '../../images/icon/klamt.png'
import { RiArrowDownDoubleLine } from 'react-icons/ri'
import { useState } from 'react'

const IntroComponent = ({showBtn, hideBtn}) => {
 
  const [arrowButton, setArrowButton]= useState(false)

  const popUpArrowButton = () => {
    setTimeout(() => {
      setArrowButton(true)
    }, 3000)
  }

    return (
    <div
      className="introComponent"
      onMouseEnter={hideBtn}            
      onLoad={popUpArrowButton}            
    >
      <div className="pelicula">
        <img src={Rosy} alt="rosy logo" className="d-block rosy" />
        <img src={Klamt} alt="klamt" className="d-block klamt" />
        <p>Sua chef à Domicílio</p>

        {arrowButton ? (
          <Link
            onClick={showBtn}
            to="conheca"
            className="arrow-down"
            target="_self"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <RiArrowDownDoubleLine />
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default IntroComponent
