import Catering01 from '../../images/catering/14.jpeg'
import Catering02 from '../../images/catering/12.jpeg'
import Catering03 from '../../images/catering/4.jpeg'


import GlutenFree from '../../images/icon/gluten.png'
import './Cardapio.css'

const Catering = () => {
  return (
    <section className="container bg-transparent py-5" id="catering">
          <h5
            className="py-4"
            style={{
              color: 'var(--color3)',
              fontFamily: 'var(--font-4)',
              textShadow: '2px 2px 2px #222',
            }}
          >
            Sujestão de Catering:
          </h5>
    
          {/* tema 01 */}
          <div className="itemCardapio bg-light" >
            <div className="row">
              <div className="col-md-6">
                <img
                  src={Catering01}
                  alt="Catering01"
                  className="w-100 d-block rounded-end-5 img-thumbnail"
                />
              </div>
              <div className="col-md-6">
                <div className="text-black-50 my-3 ">
                  <h5
                    className="fst-italic text-center"
                    style={{ fontFamily: 'var(--font-6)' }}
                  >
                    Brunches e cafés da manhã:
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
                      {' '}
                      Pão de polvilho{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />
                    </li>
                    <li>
                      {' '}
                      Homus{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />{' '}
                    </li>
                    <li>
                      {' '}
                      Caponata de berinjela{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />{' '}
                    </li>
                    <li>
                      {' '}
                      Pastinhas de leguminosas{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />{' '}
                    </li>
                    <li>
                      {' '}
                      Grãomelete{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />{' '}
                    </li>
                    <li>
                      Pudding chia{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />{' '}
                    </li>
                    <li>Panquecas </li>
                    <li>Torta salgada de legumes </li>
                    <li>
                      {' '}
                      Leites vegetais e sucos naturais{' '}
                      <img
                        src={GlutenFree}
                        alt="gluten-free"
                        style={{ width: '20px', paddingLeft: '5px' }}
                      />{' '}
                    </li>
                    <li>
                      Iaminho com granola{' '}
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
          {/* tema 02 */}
          <div className="itemCardapio bg-light mt-3 mt-md-0">
            <div className="row">
              <div className="col-md-6">
                <div className="text-black-50 mt-5">
                  <h5
                    className="fst-italic text-center"
                    style={{ fontFamily: 'var(--font-6)' }}
                  >
                    Refeições:
                  </h5>
                  <ul
                    className="fst-italic"
                    style={{ fontFamily: 'var(--font-6)' }}
                  >
                    <li> Curry </li>
                    <li> Mjadra</li>
                    <li>Moqueca</li>
                    <li>Feijoada</li>
                    <li>Massas</li>
                    <li>Burgers</li>
                    <li>Lasanhas</li>
                    <li>Pratos típicos reginonais </li>
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
                      todos os pratos podem ser adaptados para glúten-free{' '}
                    </li>
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
          {/* tema 03 */}
          <div
            className="itemCardapio bg-light mt-3 mt-md-0" >
            <div className="row">
              <div className="col-md-6 ">
                <img
                  src={Catering03}
                  alt="Catering03"
                  className="w-100 d-block rounded-end-5 img-thumbnail "
                />
              </div>
              <div className="col-md-6">
                <div className="text-black-50 my-3 ">
                  <h5
                    className="fst-italic text-center"
                    style={{ fontFamily: 'var(--font-6)' }}
                  >
                    Lanches, sobremesas:
                  </h5>
                  <ul
                    className="fst-italic"
                    style={{ fontFamily: 'var(--font-6)' }}
                  >
                    <li> Guacamole com tortilhas </li>
                    <li>Focaccia</li>
                    <li>Quiches</li>
                    <li>Espeinhos de cogumelos com legumes</li>
                    <li>Bolos</li>
                    <li>Pavês</li>
                    <li>Power balls</li>
                    <li>Creme de abacate com cacau e granola</li>
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
                      todos os pratos podem ser adaptados para glúten-free{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Catering
