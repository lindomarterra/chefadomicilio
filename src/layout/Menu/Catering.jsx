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
          Sujestão de Catering em parceria com
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
                Comida saudável:
              </h5>
              <ul
                className="fst-italic lh-lg"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li>Rolinhos de legumes com folha de arroz com molho satay</li>
                <li>Bhuda bowl (arroz 7 grãos, tempeh, edamame...)</li>
                <li> Arroz negro com brócoli, tempeh e couve-flor grelhados</li>
                <li>
                  Tofu ao molho de laranja com salada de ervilha torta e arroz
                  oriental
                </li>
                <li>cheese cake crudivora com calda de frutas da estação</li>
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
                Comidas regionais brasileiras:
              </h5>
              <ul
                className="fst-italic"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li>Palmito grelhado com molho pesto </li>
                <li>Escondidinho </li>
                <li>Moqueca</li>
                <li>Feijoada</li>
                <li>Banana da terra grelhada</li>
                <li>Vinagrete de feijão fradinho</li>
                <li>Acarajé</li>
                <li>Carurú</li>
                <li>Vatapá</li>
                <li>Beijú com calda de baunilha</li>
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
                Comida de buteco e finger food:
              </h5>
              <ul
                className="fst-italic lh-lg"
                style={{ fontFamily: 'var(--font-6)' }}
              >
                <li>Guacamole com chips </li>
                <li>Coxinha de shimeji</li>
                <li>Bolinho de feijoada com geléia de pimenta</li>
                <li>
                  Batata recheada com queijo cremoso de castanha e espinafre
                </li>
                <li>Pasteis com vinagrete</li>
                <li>Cubos de tempeh marinados e grelhados</li>
                <li>Espetinhos de cogumelos com legumes e farofa </li>
                <li>
                  {' '}
                  Barquetes com queijo cremoso de castanha e cebola caramelizada{' '}
                </li>
                <li>Trufa de chocolate com laranja</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catering
