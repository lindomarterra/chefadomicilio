import Brunch from '../../images/brunch/brunch5.png'
import Refeicao from '../../images/refeicao/background.png'
import Petisco from '../../images/petiscos/petisco2.png'

import GlutenFree from '../../images/icon/gluten.png'
import './Cardapio.css'

const Cardapio = () => {
  return (
    <section className="container bg-transparent py-5 ">
      <h5
        className="py-4"
        style={{
          color: 'var(--color3)',
          fontFamily: 'var(--font-4)',
          textShadow: '2px 2px 2px #222',
        }}
      >
        Sujestão de Cardápio para você:
      </h5>

      {/* brunches e cafe da manha */}
      <div
        style={{ borderRadius: '0 30px 0 0 ' }}
        className="itemCardapio bg-light"
        id="brunches"
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src={Brunch}
              alt="brunch"
              className="w-100 d-block rounded-end-5"
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
      {/* refeição */}
      <div className="itemCardapio bg-light r" id="refeicao">
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
                <li>Escondidinhos</li>
                <li>Rizotos</li>
                <li>Panquecas recheadas</li>
                <li>Caldos e sopas</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={Refeicao}
              alt="refeicao"
              className="w-100 d-block rounded-start-5"
            />
          </div>
        </div>
      </div>
      {/* petiscos e lanches */}
      <div className="itemCardapio bg-light" id="petiscos">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Petisco}
              alt="petisco"
              className="w-100 d-block rounded-end-5"
            />
          </div>
          <div className="col-md-6">
            <div className="text-black-50 my-3 ">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Lanches, petiscos e sobremesas:
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
      {/* outros */}
      <div style={{borderRadius:'0 0 0 30px'}} className="itemCardapio bg-light r" id="refeicao">
        <div className="row">
          <div className="col-md-6">
            <div className="text-black-50 mt-5">
              <h5
                className="fst-italic text-center"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                Outros:
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
              src={Refeicao}
              alt="refeicao"
              className="w-100 d-block rounded-start-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cardapio
