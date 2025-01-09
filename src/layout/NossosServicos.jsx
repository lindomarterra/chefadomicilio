import { Link } from 'react-router-dom'
import './NossosServicos.css'

import { ImLink } from 'react-icons/im'


const NossosServicos = () => {
  return (
    <section className="NossoServicos_container mt-4 rounded-2 p-5 ">
      <h2 className="text-center"> Nossos Serviços </h2>
      <h4> Como funciona:</h4>
      <p>
        Chef à domicílio é um serviço exclusivo de culinária vegana
        personalizada, que tem como intuíto facilitar o acesso de comida
        saudável e saborosa para as pessoas que buscam qualidade de vida.
      </p>
      <p> Elaboramos e executamos um cardápio semanal para você e sua familia em sua própia casa de acordo com suas necesidades e preferências facilitando assim o seu dia-a-dia.  </p>
      <p>
        Nossa proposta foca em uma alimentação cem por cento
        <strong> vegetariana estrita </strong> buscando trabalhar com
        ingredientes frescos e produtos menos industrializados possível.
      </p>

      <h4>Outros Serviços:</h4>
      <p>
        Também oferecemos serviços de alimentação vegetariana estrita para eventos como 
        catering, coffee-break e confraternização em geral. Elaboramos, preparamos, entregamos todo o menu em um local a escolha do cliente.
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
        <strong> Brunch </strong> semanal com agendamento prévio via whatsapp.
      </p>
    </section>
  )
}

export default NossosServicos
