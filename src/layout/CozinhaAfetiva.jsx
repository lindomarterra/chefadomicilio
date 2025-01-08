import './CozinhaAfetiva.css'

import PrincipiosMorais from '../images/principios-morais.png'
import Beneficios from '../images/beneficios.png'
import Caracteristica from '../images/caracteristica.png'
import CuidadosComSaude from '../images/cuidados-de-saude.png'
import PratoComida from '../images/comida-e-restaurante.png'
import Estude from '../images/estude.png'

import { Link } from 'react-router-dom'
import { ImLink } from 'react-icons/im'

const CozinhaAfetiva = () => {  
  return (
    <div className="mt-3 mt-md-4 mt-xl-5">
      <div className="cozinhaAfetiva_container d-block text-center p-2 rounded-2">
        <h1 className='pt-2 pt-md-3 pt-lg-5' > Cozinha Afetiva </h1>
        <p
          className="definicao fw-bold p-2"
          style={{ fontFamily: 'var(--font-8)' }}
        >
          Cozinha afetiva é um conceito que combina alimentação saudável, amor e
          cuidado. Caracteriza-se por:
        </p>

        <div className="row p-1 p-sm-2 p-md-3 p-lg-5 g-3  ">
          <div className="col-sm-6 col-xl-4 ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#adb84f',
                minHeight: '425px',
              }}
            >
              <img
                src={PrincipiosMorais}
                alt="principiosMorais"
                className="w-50 p-1"
              />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Princípios
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">Respeito às necessidades individuais;</li>
                <li className="lh-lg">Foco em ingredientes nutritivos;</li>
                <li className="lh-lg">Adaptação às restrições alimentares;</li>
                <li className="lh-lg">Preparo com intenção e atenção;</li>
                <li className="lh-lg">
                  Ingredientes frescos, em bem selecionados;
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#e09d87',
                minHeight: '425px',
              }}
            >
              <img src={Beneficios} alt="Beneficios" className="w-50 p-1" />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Beneficios
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">Melhora da saúde;</li>
                <li className="lh-lg">Fortalecimento de vínculos;</li>
                <li className="lh-lg">Redução de estresse;</li>
                <li className="lh-lg">Incremento da autoestima;</li>
                <li className="lh-lg">Experiência gastronômica única;</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#a7d1cc',
                minHeight: '425px',
              }}
            >
              <img
                src={Caracteristica}
                alt="Caracteristica"
                className="w-50 p-1"
              />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Características
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">Cozinha personalizada;</li>
                <li className="lh-lg">Uso de ingredientes naturais;</li>
                <li className="lh-lg">Técnicas de cozimento saudáveis;</li>
                <li className="lh-lg">Apresentação atraente;</li>
                <li className="lh-lg">Atendimento emocional;</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#e09d87',
                minHeight: '425px',
              }}
            >
              <img
                src={CuidadosComSaude}
                alt="CuidadosComSaude"
                className="w-50 p-1"
              />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Aplicações
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">Cozinha doméstica;</li>
                <li className="lh-lg">Serviços de catering;</li>
                <li className="lh-lg">Restaurantes;</li>
                <li className="lh-lg">Consultoria nutricional;</li>
                <li className="lh-lg">Educação culinária;</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#a7d1cc',
                minHeight: '425px',
              }}
            >
              <img src={PratoComida} alt="PratoComida" className="w-50 p-1" />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Exemplos de pratos
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">Saladas coloridas</li>
                <li className="lh-lg">Sopas nutritivas</li>
                <li className="lh-lg">Pratos vegetarianos/veganos</li>
                <li className="lh-lg">Frutas frescas</li>
                <li className="lh-lg">Bolos saudáveis</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#adb84f',
                minHeight: '425px',
              }}
            >
              <img src={Estude} alt="Estude" className="w-50 p-1" />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Material recomendados
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">
                  <Link to="#" target="_blank">
                    Alimentação consciente
                    <ImLink className="ms-1 fs-5" />
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link to="#" target="_blank">
                    Veggie
                    <ImLink className="ms-1 fs-5" />
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link to="#" target="_blank">
                    Cozinha Saudável
                    <ImLink className="ms-1 fs-5" />
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link to="#" target="_blank">
                    Alimentação consciente
                    <ImLink className="ms-1 fs-5" />
                  </Link>
                </li>
                <li className="lh-lg">
                  <Link to="#" target="_blank">
                    Veggie
                    <ImLink className="ms-1 fs-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CozinhaAfetiva
