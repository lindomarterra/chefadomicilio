import { Link } from 'react-router-dom'
import './NossosServicos.css'

import { ImLink } from 'react-icons/im'

const NossosServicos = () => {
  return (
    <section className="nossoServicos_container mt-4 p-4 p-lg-5 ">
      <div className="animation_container">
        <h2 className="p-4">Nossos Serviços </h2>
        <h4 className="py-2 px-1"> O que é:</h4>
        <p>
          Chef à domicílio é um serviço exclusivo de culinária vegana
          personalizada, que tem como intuíto facilitar o acesso de comida
          saudável e saborosa para as pessoas que buscam qualidade de vida.
        </p>
        <p>
          Nossa proposta foca em uma alimentação
          <strong> Plant Based </strong>, alimentação que não utiliza nenhum
          produto de origem animal (é 100% vegetal) e prioriza os alimentos mais
          naturais e íntegros evitando o consumo de alimentos refinados e muito
          processados.
        </p>
        <h4 className="py-2 px-1"> Como funciona:</h4>
        <p>
          Elaboramos e executamos um cardápio semanal para você e sua familia em
          sua própia casa de acordo com suas necesidades e preferências
          <strong>facilitando</strong> assim o seu dia-a-dia.
        </p>

        <h4 className="py-2 px-1">Outros Serviços:</h4>
        <p>
          Também oferecemos serviços de alimentação vegetariana estrita para
          eventos como catering, coffee-break e confraternização em geral.
          Elaboramos, preparamos, entregamos todo o menu em um local a escolha
          do cliente.
        </p>
        <p>
          Nosso serviço de Catering é em parceria com a
          <strong>
            <Link
              to="https://soulrebelrio.com/veganrioexperience"
              target="_blank"
            >
              Soul Rebel Rio
            </Link>
            <ImLink />
          </strong>
          que fica no bairro Santa Teresa RJ, onde também oferecemos serviços de
          <strong> Brunch </strong> semanal com agendamento prévio via{' '}
          <strong>
            <Link
              to="https://web.whatsapp.com/send?phone=5551 9694-4233"
              target="_blank"
            >
              Whatsapp.
            </Link>
          </strong>
        </p>

        <p>
          Conheça mais sobre
          <strong>
            <Link to="/about" target="_self">
              Rose Klamt
            </Link>
            <ImLink />
          </strong>
        </p>
      </div>
    </section>
  )
}

export default NossosServicos
