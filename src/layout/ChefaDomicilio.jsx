import './ChefaDomicilio.css'

import PrincipiosMorais from '../images/principios-morais.png'
import Beneficios from '../images/beneficios.png'
import PratoComida from '../images/comida-e-restaurante.png'
import MeChama from './MeChama'

const ChefaDomicilio = () => {
  return (
    <div className="mt-md-4 mt-xl-5">
      <div className="chefaDomicilio_container d-block text-center p-2 rounded-2">
        <MeChama />

        <h1 className="pt-2 pt-md-3 pt-lg-5"> Chef à Domicílio </h1>
        <p
          className="definicao fw-bold p-1"
          style={{ fontFamily: 'var(--font-8)' }}
        >
          Ofereço o preparo de refeições veganas para você e sua familia de
          acordo com suas necessidades, preferências ou restrições.
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
                <li className="lh-lg">Economia de tempo;</li>
                <li className="lh-lg">Alimentação saudável e equilibrada;</li>
                <li className="lh-lg">Variedade de opções;</li>
                <li className="lh-lg">Atendimento personalizado;</li>
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
              <img src={PratoComida} alt="PratoComida" className="w-50 p-1" />

              <p className="fs-3" style={{ fontFamily: 'var(--font-4)' }}>
                # Sugestões de cardápio
              </p>
              <ul
                className="text-start lh-sm"
                style={{ fontFamily: 'var(--font-2)' }}
              >
                <li className="lh-lg">Cafés da manhã;</li>
                <li className="lh-lg">Refeições completas,</li>
                <li className="lh-lg">Petiscos e comida de boteco;</li>
                <li className="lh-lg">Saladas; </li>
                <li className="lh-lg">Brunches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChefaDomicilio
