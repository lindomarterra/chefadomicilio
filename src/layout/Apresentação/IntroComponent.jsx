import './IntroComponent.css'
import { Link } from 'react-scroll'
import Rosy from '../../images/icon/rosy.png'
import Klamt from '../../images/icon/klamt.png'
import { RiArrowDownDoubleLine } from 'react-icons/ri'

const IntroComponent = ({showBtn, hideBtn}) => {
 
  return (
    <div
      className="introComponent"      
      onMouseOver={hideBtn}
      onWheel={showBtn}
    >
      <div className="pelicula">
        <img src={Rosy} alt="rosy logo" className="d-block rosy" />
        <img src={Klamt} alt="klamt" className="d-block klamt" />
        <p>
          <span className="span1">Sua</span>
          <span className="span2">Chef</span>
          <span className="span3">à</span>
          <span className="span4">Domicílio</span>
        </p>
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
      </div>
    </div>
  )
}

export default IntroComponent
