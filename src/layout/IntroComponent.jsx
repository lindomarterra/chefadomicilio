import './IntroComponent.css'
import Rose from '../images/rose/rose.png'
import Klamt from '../images/rose/klamt.png'

const IntroComponent = () => {
  return (
    <div className="introComponent ">
      <div className="pelicula">
          <img src={Rose } alt="rose" className='d-block rose' />
          <img src={Klamt} alt="klamt" className='d-block klamt' />
          <p>
            <span className='span1' >Sua</span>
            <span className='span2' >Chef</span>
            <span className='span3' >à</span>
            <span className='span4' >Domicílio</span>
          </p>
      </div>
    </div>
  )
}

export default IntroComponent
