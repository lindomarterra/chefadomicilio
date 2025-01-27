import Catering01 from '../../images/catering/catering01.png'
import Catering02 from '../../images/catering/catering02.png'
import Catering03 from '../../images/catering/catering03.png'
import Catering04 from '../../images/catering/catering04.png'


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
        Catering temático:
      </h5>

      {/* tema 01 */}
      <div
        style={{ borderRadius: '0 30px 0 0 ' }}
        className="itemCardapio bg-light"
        id="brunches"
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src={Catering01}
              alt="catering01"
              className="w-100 d-block rounded-end-5"
              style={{ height: '350px' }}
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Tema zero e um:
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
                    style={{ width: '20px' }}
                  />
                </li>
                <li> Pão de queijo </li>
                <li> Homus </li>
                <li> Babaganoush </li>
                <li> Caponata de berinjela </li>
                <li> Pastinhas de leguminosas </li>
                <li> Grãomelete </li>
                <li>Power balls </li>
                <li>Panquecas </li>
                <li>Torta salgada de legumes </li>
                <li> Leites vegetais e sucos naturais </li>
                <li>Creme de abacate com cacau e granola</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* tema 02 */}
      <div className="itemCardapio bg-light r" id="refeicao">
        <div className="row">
          <div className="col-md-6">
            <div className="text-black-50 mt-5">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Tema zero e dois
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
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={Catering02}
              alt="catering02"
              className="w-100 d-block rounded-start-5"
              style={{ height: '350px' }}
            />
          </div>
        </div>
      </div>
      {/* Tema 03 */}
      <div className="itemCardapio bg-light" id="petiscos">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Catering03}
              alt="catering03"
              className="w-100 d-block rounded-end-5"
              style={{ height: '350px' }}
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Tema zero e tres:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Tema 04 */}
      <div
        style={{ borderRadius: '0 0 0 30px' }}
        className="itemCardapio bg-light r"
        id="refeicao"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="text-black-50 mt-5">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Tema 04:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li> Curry </li>
                <li> Mjadra</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={Catering04}
              alt="catering04"
              className="w-100 d-block rounded-start-5"
              style={{ height: '350px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catering
