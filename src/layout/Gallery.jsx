import './Gallery.css'
import Refeicao1 from '../images/refeicao/refeicao1.png'
import Refeicao2 from '../images/refeicao/refeicao2.png'
import Refeicao3 from '../images/refeicao/refeicao3.png'
import Refeicao4 from '../images/refeicao/refeicao4.png'
import Refeicao5 from '../images/refeicao/refeicao5.png'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <section className="container mb-5">
      <div className="text-center p-5">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active btn_hover p-1 m-1 m-sm-2 m-md-3 m-lg-4 rounded-1"
          aria-current="true"
          aria-label="Slide 1"
        >
          Refeições
        </button>
        <button
          className="btn_hover p-1 m-1 m-sm-2 m-md-3 m-lg-4 rounded-1"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        >
          Brunches
        </button>
        <button
          className="btn_hover p-1 m-1 m-sm-2 m-md-3 m-lg-4 rounded-1"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        >
          Petiscos
        </button>
      </div>

      <div id="carouselExample" className="carousel carousel-fade slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row g-0">
               <div className="col-md-6 col-lg-4">
                  <div className="d-sm-flex d-md-block">
                    <Link to="/menu" target="_self">
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao2}
                        alt="refeicao2"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>

                    <Link to="/menu" target="_self">
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao1}
                        alt="refeicao1"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 ms-sm-2 ms-md-0">
                  <Link to="/menu" target='_self' >
                    <img
                      style={{ height: '500px' }}
                      src={Refeicao3}
                      alt="refeicao3"
                      className="d-block w-100 p-2 rounded-4"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-sm-flex d-lg-block">
                    <Link to="/menu" target='_self' >
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao5}
                        alt="refeicao5"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                    <Link to="/menu" target='_self' >
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao4}
                        alt="refeicao4"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ height: '500px' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-4">
                  <div className="d-sm-flex d-md-block">
                    <Link to="/menu" target="_self">
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao2}
                        alt="refeicao2"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>

                    <Link to="/menu" target="_self">
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao1}
                        alt="refeicao1"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 ms-sm-2 ms-md-0">
                  <Link to="/menu" target='_self' >
                    <img
                      style={{ height: '500px' }}
                      src={Refeicao3}
                      alt="refeicao3"
                      className="d-block w-100 p-2 rounded-4"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-sm-flex d-lg-block">
                    <Link to="/menu" target='_self' >
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao5}
                        alt="refeicao5"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                    <Link to="/menu" target='_self' >
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao4}
                        alt="refeicao4"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ height: '500px' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-4">
                  <div className="d-sm-flex d-md-block">
                    <Link to="/menu" target="_self">
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao2}
                        alt="refeicao2"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>

                    <Link to="/menu" target="_self">
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao1}
                        alt="refeicao1"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 ms-sm-2 ms-md-0">
                  <Link to="/menu" target='_self' >
                    <img
                      style={{ height: '500px' }}
                      src={Refeicao3}
                      alt="refeicao3"
                      className="d-block w-100 p-2 rounded-4"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-sm-flex d-lg-block">
                    <Link to="/menu" target='_self' >
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao5}
                        alt="refeicao5"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                    <Link to="/menu" target='_self' >
                      <img
                        style={{ height: '250px' }}
                        src={Refeicao4}
                        alt="refeicao4"
                        className="d-block w-100 p-2 rounded-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
