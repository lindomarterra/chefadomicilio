import { Link } from 'react-router-dom'
import './NossosServicos.css'

import { ImLink } from 'react-icons/im'


const NossosServicos = () => {
  return (
    <section className="NossoServicos_container mt-4 rounded-2 p-5 ">
      <h2 className="text-center"> Nossos Serviços </h2>
      <h4> Como funciona:</h4>
      <p>
        Oferecemos um serviço exclusivo de culinária vegana personalizada para
        vc e para sua familia, preparando toda a{' '}
        <strong>comida da semana</strong> onde vc pode deixá-las{' '}
        <strong>congeladas</strong> e assim consumí-la conforme sua necessidade
        durante a semana.
      </p>
      <p>
        Nossa proposta foca em uma alimentação cem por cento{' '}
        <strong>vegetariana estrita</strong> buscando trabalhar com ingredientes
        frescos e produtos o menos industrializado possível.
      </p>
      <p>
        A ideia é facilitar o dia-a-dia das pessoas que não tem tempo ou não
        gostam de cozinhar e mesmo assim se preocupam em ter uma alimentação{' '}
        <strong>nutritiva</strong> e saborosa no conforto do sua casa.
      </p>

      <h4>Outros Serviços:</h4>
      <p>
        Também oferecemos serviços de alimentação vegetariana estrita para
        catering e demais eventos similares com preparo entrega e apresentação
        do mesmo em um ambiente a escolha do cliente.
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
          <ImLink/>
        </strong>
        que fica no bairro Santa Teresa RJ, onde também oferecemos serviços de{' '}
        <strong>Brunch</strong> semanal com agendamento prévio via whatsapp.
      </p>
    </section>
  )
}

export default NossosServicos
