import { MdAlternateEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  let navigate= useNavigate()

  const redirectConfirmedMessage= ()=>{
    navigate('https://terra-six-zeta.vercel.app/confirmedMessage')
  }

  return (
    <form
      onSubmit={redirectConfirmedMessage}
      className="text-center px-5 py-5 "
      style={{ backgroundColor: '#22222aaa' }}
      action="https://api.staticforms.xyz/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="accessKey"
        value="285d22b1-8224-4e5b-a360-a577a3a60785" //chave de acesso vindo do email
      />

      <input
        type="hidden"
        name="redirectTo"
        value="https://terra-six-zeta.vercel.app/confirmedMessage"
      />

      <input type="hidden" name="_captcha" value="false"></input>

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
          name="name"
          placeholder=""
          required
        />
        <label htmlFor="name">
          <span>Name:</span>
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
          name="message" //inportante colocar em ingles para o api dar certo
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
          <span> Send us a message!</span>
        </label>
      </div>

<<<<<<< HEAD
      <button        
        type="submit"
        className="btn btn-outline-light btnEnviar w-100"
      >
=======
      <button type="submit" className="btn btn-outline-light btnEnviar w-100">
<<<<<<< HEAD
>>>>>>> 2345f9e (editado novo)
        <span className="fw-bold">Enviar</span>
=======
        <span className="fw-bold">Submit</span>
>>>>>>> ecebbe0 (commit 20 april 2025)
      </button>
    </form>
  )
}

export default Form
