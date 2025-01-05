import BackgroundDesktop1 from '../images/backgroundDesktop1.png'
import BackgroundDesktop2 from '../images/backgroundDesktop2.png'

import BackgroundTablet1 from '../images/backgroundTablet1.png'

import BackgroundMobile1 from '../images/backgroundMobile1.png'

import AnimationIntro from './AnimationIntro'

const CarouselBegining = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide vh-100 carousel-fade"
      //data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src={BackgroundMobile1}
            alt="cozinhaAfetiva"
            className=" vh-100 w-100 opacity-75 d-md-none "
          />
          <img
            src={BackgroundTablet1}
            alt="cozinhaAfetiva"
            className=" vh-100 w-100 opacity-75 d-none d-md-block d-lg-none "
          />
          <img
            src={BackgroundDesktop1}
            alt="cozinhaAfetiva"
            className=" vh-100 w-100 opacity-75 d-none d-lg-block  "
          />
          <div className="carousel-caption">
            <AnimationIntro />
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={BackgroundDesktop2}
            alt="cozinhaAfetiva"
            className=" vh-100 w-100 opacity-75"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Two slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselBegining
