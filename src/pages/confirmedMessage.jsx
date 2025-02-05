import { useNavigate } from 'react-router-dom'


const confirmedMessage = () => {  
  const navigate = useNavigate()

  const voltarHome = () => {
    navigate('/')
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: 'rgba(117, 197, 121, 0.466)',
      }}
      className="d-flex justify-content-center align-items-center flex-column text-center "
    >
      <p className="fs-2 p-2">
        {' '}
        Email recebido com sucesso! Em breve entro em contato com você.{' '}
      </p>
      <p className="fs-3 p-2">
        {' '}
        Click no botão abaixo para voltar a página principal{' '}
      </p>
      <button
        onClick={voltarHome}
        className="btn btn-sm btn-outline-dark fw-bolder mt-5"
      >
        Página Principal
      </button>
    </section>
  )
}

export default confirmedMessage
