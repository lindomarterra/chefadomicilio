import './IntroComponent.css'
import { Link } from 'react-scroll'
import Rose from '../../images/icon/rose.png'
import Klamt from '../../images/icon/klamt.png'

const IntroComponent = ({showBtn, hideBtn}) => {
 
  return (
    <div className="introComponent" id="introducao" onMouseOver={hideBtn}>
      <div className="pelicula">
        <img src={Rose} alt="rose" className="d-block rose" />
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
          conheça
        </Link>
      </div>
    </div>
  )
}

export default IntroComponent
