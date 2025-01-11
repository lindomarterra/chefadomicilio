import CarouselFoto1 from '../images/carouselFoto1.png'
import CarouselFoto2 from '../images/carouselFoto2.png'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'

const Carousel = () => {
  return (
    <section
      style={{ backgroundColor: '#fff' }}
      className="mt-2 mt-lg-4"
    >
      <div
        id="carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              style={{maxHeight: '500px'}}  
              src={CarouselFoto1}
              className="d-block w-100"
              alt="carouselFoto1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              style={{maxHeight: '500px'}}  
              src={CarouselFoto2}
              className="d-block w-100"
              alt="carouselFoto2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <FaRegArrowAltCircleLeft className="text-black fs-4" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <FaRegArrowAltCircleRight className="text-black fs-4" />
        </button>
      </div>
    </section>
  )
}

export default Carousel
