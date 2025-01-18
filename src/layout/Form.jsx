import { MdAlternateEmail } from 'react-icons/md'

const Form = () => {
  return (
    <form
      className="text-center px-5 py-4 "
      style={{ backgroundColor: '#22222aaa' }}
      action="https://formsubmit.co/terra.lindomar@gmail.com"
      method="POST"
    >
      <MdAlternateEmail className="mb-3" style={{ fontSize: '60px' }} />

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control pt-5"
          style={{
            backgroundColor: '#222222e5',
            color: '#fff',
          }}
          id="name"
          name="nome"
          placeholder=""
          required
        />
        <label htmlFor="name">
          <span>Nome:</span>
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control pt-5"
          style={{
            backgroundColor: '#222222e5',
            color: '#fff',
          }}
          id="email"
          name="email"
          placeholder=""
          required
        />
        <label htmlFor="email">
          <span>Email:</span>
        </label>
      </div>

      <div className="form-floating mb-3">
        <textarea
          name="mensagem"
          id="mensagem"
          required
          className="form-control pt-5"
          placeholder=""
          style={{
            height: '175px',
            resize: 'vertical',
            backgroundColor: '#222222e5',
            color: '#fff',
          }}
        ></textarea>
        <label htmlFor="mensagem">
          <span>Envie-nos uma mensagem!</span>
        </label>
      </div>
      <input
        type="hidden"
        name="_next"
        value="https://lindomarterra.github.io/restaurante/index(confirmcontact).html"
      />

      <button type="submit" className="btn btn-outline-light btnEnviar w-100">
        <span className="fw-bold">Enviar</span>
      </button>
    </form>
  )
}

export default Form
