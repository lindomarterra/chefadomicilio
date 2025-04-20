import Catering01 from '../../images/catering/comidaButecoCatering.png'
import Catering02 from '../../images/catering/12.jpeg'
import Catering03 from '../../images/catering/4.jpeg'
import { Link } from 'react-router-dom'
import './Cardapio.css'


const Catering = () => {
  return (
    <section className="container bg-transparent py-5">
      <h5 className="pb-4 ps-2">
        <span
          className="pt-5 mt-4 fw-bolder text-black-50"
          style={{ fontFamily: 'var(--font-6)' }}
        >
          Catering suggestion in partnership with
        </span>
        <Link
          style={{
            color: 'var(--color3)',
            fontFamily: 'var(--font-4)',
            textShadow: '1px 1px 1px #222',
            cursor: 'pointer',
          }}
          to="https://soulrebelrio.com/catering/"
          target="_blank"
          className="ps-2 text-decoration-none"
        >
          @soulrebel.rio
        </Link>
      </h5>

      {/* comida saudável */}
      <div className="itemCardapio bg-light">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Catering03}
              alt="Catering03"
              className="w-100 d-block rounded-end-5 img-thumbnail"
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center lh-lg"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Healthy food:
              </h5>
              <ul
                className="fst-italic lh-lg"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li>Vegetable rolls in rice paper with satay sauce</li>
                <li>Buddha bowl (7 grain rice, tempeh, edamame...)</li>
                <li>
                  {' '}
                  Black rice with grilled broccoli, tempeh and cauliflower
                </li>
                <li>
                  Tofu in orange sauce with crooked pea salad and rice oriental
                </li>
                <li>raw cheesecake with seasonal fruit sauce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* comidas regionais */}
      <div className="itemCardapio bg-light mt-3 mt-md-0">
        <div className="row">
          <div className="col-md-6">
            <div className="text-black-50 mt-5">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Brazilian regional foods:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li> Grilled hearts of palm with pesto sauce </li>
                <li> hidden vegetables with mushrooms </li>
                <li> Moqueca</li>
                <li>Feijoada</li>
                <li> Grilled plantain </li>
                <li> Black-eyed pea vinaigrette </li>
                <li>Acarajé</li>
                <li>Carurú</li>
                <li>Vatapá</li>
                <li> Beijú with vanilla syrup </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={Catering02}
              alt="Catering02"
              className="w-100 d-block rounded-start-5 img-thumbnail "
            />
          </div>
        </div>
      </div>
      {/* comida de buteco */}
      <div className="itemCardapio bg-light mt-3 mt-md-0">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src={Catering01}
              alt="Catering01"
              className="w-100 d-block rounded-end-5 img-thumbnail "
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center lh-lg"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Pub food:
              </h5>
              <ul
                className="fst-italic lh-lg"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li> Guacamole with chips </li>
                <li> Shimeji coxinha </li>
                <li> Feijoada balls with pepper jelly </li>
                <li>Potato stuffed with creamy chestnut cheese and spinach</li>
                <li> Pastries with vinaigrette </li>
                <li> Marinated and grilled tempeh cubes </li>
                <li> Mushroom skewers with vegetables and farofa </li>
                <li>
                  Toasts with creamy chestnut cheese and caramelized onion
                </li>
                <li> Chocolate truffle with orange</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catering
