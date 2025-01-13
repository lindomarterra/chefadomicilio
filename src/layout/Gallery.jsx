import './Gallery.css'
import Refeicao1 from '../images/refeicao/refeicao1.png'
import Refeicao2 from '../images/refeicao/refeicao2.png'
import Refeicao3 from '../images/refeicao/refeicao3.png'
import Refeicao4 from '../images/refeicao/refeicao4.png'
import Refeicao5 from '../images/refeicao/refeicao5.png'

const Gallery = () => {
  return (
    <section className="container mb-5">
      <div className="text-center p-5">
        <button
          style={{ width: '100px' }}
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active m-1"
          aria-current="true"
          aria-label="Slide 1"
        >
          Refeições
        </button>
        <button
          style={{ width: '100px' }}
          className="m-1"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        >
          {' '}
          Brunches{' '}
        </button>
        <button
          style={{ width: '100px' }}
          className="m-1"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        >
          Patês
        </button>
      </div>

      <div id="carouselExampleDark" className="carousel carousel-fade slide">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className='container' > 
              <div className="row g-0">
                <div className="col-lg-4">
                  <div >
                    <img
                      style={{ height: '250px', margin: '0 10px 10px 0' }}
                      src={Refeicao1}
                      alt="refeicao1"
                      className="d-block w-100 rounded-3 "
                    />
                  </div>
                  <div >
                    <img
                      style={{ height: '250px', margin: '10px 10px 0 0 ' }}
                      src={Refeicao2}
                      alt="refeicao2"
                      className="d-block w-100 rounded-3 "
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <img
                      style={{ height: '510px' , margin: '0 5px' }}
                      src={Refeicao3}
                      alt="refeicao3"
                      className="d-block w-100 rounded-3"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <img
                      style={{ height: '250px', margin:'0 0 10px 10px' }}
                      src={Refeicao4}
                      alt="refeicao4"
                      className="d-block w-100 rounded-3"
                    />
                  </div>
                  <div>
                    <img
                      style={{ height: '250px', margin:'10px 0 0 10px' }}
                      src={Refeicao5}
                      alt="refeicao5"
                      className="d-block w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div style={{ height: '500px' }}>
              <div className="row"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ height: '500px' }}>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
