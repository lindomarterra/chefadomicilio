import './Menu.css'

import Refeicao1 from '../../images/refeicao/refeicao1.png'
import Refeicao2 from '../../images/refeicao/refeicao2.png'
import Refeicao3 from '../../images/refeicao/refeicao3.png'
import Refeicao4 from '../../images/refeicao/refeicao4.png'
import Refeicao5 from '../../images/refeicao/refeicao5.png'

import Brunch1 from '../../images/brunch/brunch1.png'
import Brunch2 from '../../images/brunch/brunch2.png'
import Brunch3 from '../../images/brunch/brunch3.png'
import Brunch4 from '../../images/brunch/brunch4.png'

import Petisco1 from '../../images/petiscos/petisco1.png'
import Petisco2 from '../../images/petiscos/petisco2.png'
import Petisco3 from '../../images/petiscos/petisco3.png'
import Petisco7 from '../../images/petiscos/petisco7.png'
import Petisco6 from '../../images/petiscos/petisco6.png'

import { Link } from 'react-scroll'

const Gallery = () => {
  return (
    <div className="container pt-5" id="galeria">
      <div className="text-center p-2">
        <Link
          to="cardapio"
          target="_self"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="btn_menu"
        >
          Cardápio
        </Link>
      </div>

      <div className="text-center p-1">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active btn_hover p-1 m-1 m-sm-2 m-md-3 rounded-1"
          aria-current="true"
          aria-label="Slide 1"
        >
          Refeições
        </button>
        <button
          className="btn_hover p-1 m-1 m-sm-2 m-md-3 rounded-1"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        >
          Brunches
        </button>
        <button
          className="btn_hover p-1 m-1 m-sm-2 m-md-3 rounded-1"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        >
          Petiscos
        </button>
      </div>

      <div
        id="carouselExample"
        className="carousel carousel-fade slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="refeicao"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Refeicao2}
                      alt="refeicao2"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>

                  <Link
                    to="refeicao"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Refeicao1}
                      alt="refeicao1"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="refeicao"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '500px' }}
                      src={Refeicao3}
                      alt="refeicao3"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="refeicao"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Refeicao5}
                      alt="refeicao5"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                  <Link
                    to="refeicao"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Refeicao4}
                      alt="refeicao4"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="brunches"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '500px' }}
                      src={Brunch3}
                      alt="brunch3"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="brunches"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Brunch1}
                      alt="brunch1"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>

                  <Link
                    to="brunches"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Brunch2}
                      alt="brunch2"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="brunches"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '500px' }}
                      src={Brunch4}
                      alt="brunch4"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="petiscos"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '500px' }}
                      src={Petisco1}
                      alt="petisco1"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4  ">
                  <Link
                    to="petiscos"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Petisco2}
                      alt="petisco2"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                  <Link
                    to="petiscos"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '250px' }}
                      src={Petisco3}
                      alt="petisco3"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    to="petiscos"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '300px' }}
                      src={Petisco6}
                      alt="petisco6"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                  <Link
                    to="petiscos"
                    target="_self"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <img
                      style={{ height: '200px' }}
                      src={Petisco7}
                      alt="petisco7"
                      className="d-block w-100 rounded-4 p-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
