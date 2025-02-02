import './ChefaDomicilio.css'

import PrincipiosMorais from '../../images/icon/principios-morais.png'
import Beneficios from '../../images/icon/beneficios.png'
import PratoComida from '../../images/icon/comida-e-restaurante.png'


const ChefaDomicilio = () => {
  return (
    <div className="px-3 py-5 container" id="conheca">
      <div className="chefaDomicilio_container d-block text-center p-2 rounded-2">
        <h1 className="pt-4 animeOpacity"> Chef à Domicílio </h1>
        <p className="p-3 text-center animeOpacity">
          Quer deixar a comida da semana preparada e organizada para{' '}
          <span>facilitar</span> o seu dia-a-dia e sem deixar de se alimentar
          bem? Ofereço o preparo de refeições <span>veganas</span> para você e
          sua familia de acordo com suas necessidades, preferências ou
          restrições.
        </p>

        {/* os 3 Banners */}
        <div className="row p-1 g-3">
          <div className="col-sm-6 col-lg-4 scrollEfect ">
            <div
              className="rounded-2 p-2 shadow-sm"
              style={{
                backgroundColor: '#addb97',
                minHeight: '300px',
              }}
            >
              <img
                src={PrincipiosMorais}
                alt="principiosMorais"
                className="w-25 p-1"
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
          <div className="col-sm-6 col-lg-4 scrollEfect ">
            <div
              className="rounded-2 p-2 shadow-sm"
              style={{
                backgroundColor: '#eddf8e',
                minHeight: '300px',
              }}
            >
              <img src={Beneficios} alt="Beneficios" className="w-25 p-1" />
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
          <div className="col-sm-6 col-lg-4 scrollEfect ">
            <div
              className="rounded-2 p-2 "
              style={{
                backgroundColor: '#c6c9a7',
                minHeight: '300px',
              }}
            >
              <img src={PratoComida} alt="PratoComida" className="w-25 p-1" />
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
