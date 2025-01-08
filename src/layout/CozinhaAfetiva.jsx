import './CozinhaAfetiva.css'

import PrincipiosMorais from '../images/principios-morais.png'
import Beneficios from '../images/beneficios.png'
import Caracteristica from '../images/caracteristica.png'
import CuidadosComSaude from '../images/cuidados-de-saude.png'
import PratodeCoracao from '../images/prato-de-coracao.png'
import { Link } from 'react-router-dom'
import { ImLink } from 'react-icons/im'

const CozinhaAfetiva = () => {
  return (
    <div className="mt-5">
      <div className="cozinhaAfetiva_container d-block text-center bg-white p-4 rounded-2">
        <h1> Cozinha Afetiva </h1>
        <p
          className="definicao fw-bold p-4"
          style={{ fontFamily: 'var(--font-8)' }}
        >
          Cozinha afetiva é um conceito que combina alimentação saudável, amor e
          cuidado. Caracteriza-se por:
        </p>

        <div className="row p-5 pb-4 ">
          <div className="col-md-4">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#82bf84',
                height: '425px',
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
                <li>
                  Alimentação consciente:
                  <span>
                    respeito às necessidades nutricionais e preferências
                    individuais
                  </span>
                </li>
                <li>
                  Respeito à diversidade:
                  <span>adaptação às restrições alimentares</span>
                </li>
                <li>
                  Ambiente acolhedor:
                  <span>atmosfera agradável durante as refeições</span>
                </li>
                <li>
                  Amor e cuidado: <span>preparo com intenção e atenção</span>
                </li>
                <li>
                  Qualidade dos ingredientes:
                  <span>frescos, orgânicos e saudáveis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#bf8c82',
                height: '425px',
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

          <div className="col-md-4">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#a7d1cc',
                height: '425px',
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
        </div>

        <div className="row p-5 pt-0">
          <div className="col-md-4">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#adb84f',
                height: '425px',
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
          <div className="col-md-4">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#adb84f',
                height: '425px',
              }}
            >
              <img
                src={PratodeCoracao}
                alt="PratodeCoracao"
                className="w-50 p-1"
              />

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
          <div className="col-md-4">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#adb84f',
                height: '425px',
              }}
            >
              <img
                src={PratodeCoracao}
                alt="PratodeCoracao"
                className="w-50 p-1"
              />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Material recomendados
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li>
                  <Link className='text-decoration-none' to="#" target="_blank">
                    Alimentação consciente
                    <ImLink className='ms-1 fs-5' />
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
