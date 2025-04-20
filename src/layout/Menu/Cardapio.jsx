import Brunch from '../../images/brunch/brunch1.png'
import Refeicao from '../../images/refeicao/background.png'
import Petisco from '../../images/brunch/brunch5.png'

import GlutenFree from '../../images/icon/gluten.png'
import './Cardapio.css'

const Cardapio = () => {
  return (
    <section className="container bg-transparent py-5" id="cardapio">
      <h5
        className="pt-5 mt-4 pb-2 ps-2 fw-bolder text-black-50"
        style={{ fontFamily: 'var(--font-6)' }}
      >
        Menu suggestion for you:
      </h5>

      {/* brunches e cafe da manha */}
      <div className="itemCardapio bg-light">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Brunch}
              alt="brunch"
              className="w-100 d-block rounded-end-5 img-thumbnail"
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Breakfasts and Brunches:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li>
                  Tofu scrambled{' '}
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />
                </li>
                <li>
                  Tapioca flour bread
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />
                </li>
                <li>
                  Hommus
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
                <li>
                  {' '}
                  Eggplant Caponata
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
                <li>
                  Pastinhas de leguminosas
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
                <li>
                  Grãomelete
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
                <li>
                  Chia pudding
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
                <li>Pancakes </li>
                <li>Salty vegetable pie </li>
                <li>
                  Vegetable milks and natural juices
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
                <li>
                  yam cream with granola
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{ width: '20px', paddingLeft: '5px' }}
                  />{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* refeição */}
      <div className="itemCardapio bg-light mt-3 mt-md-0">
        <div className="row">
          <div className="col-md-6">
            <div className="text-black-50 mt-5">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Meals:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li> Curry </li>
                <li> Mjadra</li>
                <li>Moqueca</li>
                <li>Feijoada</li>
                <li>Pastas</li>
                <li>Burgers</li>
                <li>Lasagnas</li>
                <li> Typical regional dishes </li>
                <li className="list-unstyled pt-2  ">
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{
                      width: '20px',
                      paddingRight: '5px',
                      paddingBottom: '2px',
                    }}
                  />
                  all dishes can be adapted for gluten-free
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={Refeicao}
              alt="refeicao"
              className="w-100 d-block rounded-start-5 img-thumbnail "
            />
          </div>
        </div>
      </div>
      {/* lanches e sobremesas */}
      <div className="itemCardapio bg-light mt-3 mt-md-0">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src={Petisco}
              alt="petisco"
              className="w-100 d-block rounded-end-5 img-thumbnail "
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Snacks and desserts:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li> Guacamole with tortillas </li>
                <li>Focaccia</li>
                <li>Quiches</li>
                <li>Mushroom and vegetable skewers</li>
                <li>Cakes</li>
                <li>Pavês</li>
                <li>Power balls</li>
                <li> Avocado cream with cocoa and granola </li>
                <li className="list-unstyled pt-2  ">
                  <img
                    src={GlutenFree}
                    alt="gluten-free"
                    style={{
                      width: '20px',
                      paddingRight: '5px',
                      paddingBottom: '2px',
                    }}
                  />
                  
                  all dishes can be
                  adapted for gluten-free
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cardapio
