import { Link } from 'react-router-dom'

import './NossosServicos.css'

import { ImLink } from 'react-icons/im'

const NossosServicos = () => {
  return (
    <section className="nossoServicos_container pt-5" >
      <div className="container-md p-md-5 animation_container">
        <h2 className="py-4 "> Serviços </h2>
        
          <h4 className="py-2 px-1 animeOne"> O que é:</h4>
          <p className='animeOne' >
            Chef à domicílio é um serviço exclusivo de culinária vegana
            personalizada, que tem como intuíto facilitar o acesso de comida
            saudável e saborosa para as pessoas que buscam qualidade de vida.
          </p>
        <p className='animeOne'>
          Nossa proposta foca em uma alimentação
          <strong> Plant Based </strong>, alimentação que não utiliza nenhum
          produto de origem animal (é 100% vegetal) e prioriza os alimentos mais
          naturais e íntegros evitando o consumo de alimentos refinados e muito
          processados.
        </p>
        <h4 className="py-2 px-1 animeTwo"> Como funciona:</h4>
        <p className='animeTwo'>
          Elaboramos e executamos um cardápio semanal para você e sua familia em
          sua própia casa de acordo com suas necesidades e preferências
          <strong>facilitando</strong> assim o seu dia-a-dia.
        </p>

        <h4 className="py-2 px-1 animeThree">Outros Serviços:</h4>
        <p className='animeThree' >
          Também oferecemos serviços de alimentação vegetariana estrita para
          eventos como catering, coffee-break e confraternização em geral.
          Elaboramos, preparamos, entregamos todo o menu em um local a escolha
          do cliente.
        </p>
        <p className='animeThree' >
          Nosso serviço de Catering é em parceria com a
          <strong>
            <Link to="https://soulrebelrio.com/catering/" target="_blank">
              Soul Rebel Rio
            </Link>
            <ImLink />
          </strong>
          que fica no bairro Santa Teresa RJ, onde também oferecemos serviços de
          <strong> Brunch </strong> semanal com agendamento prévio via
          <strong>
            <Link
              to="https://wa.me//552182950900?text=Olá! Tudo bem? Obrigada por entrar em contato."
              target="_blank"
              alt="Entrar em contato pelo whatsapp"
            >
              Whatsapp.
            </Link>
          </strong>
        </p>
        
      </div>
    </section>
  )
}

export default NossosServicos
