import { Link } from 'react-router-dom'
import './Footer.css'
import Form from './Form'
import SoulRebelRioLogo from '../images/icon/soulRebelRioLogo.png'
import { CiInstagram, CiLinkedin } from 'react-icons/ci'
import CopyRight from './CopyRight'

import ImgLogo from '../images/icon/imgLogo.png'

const Footer = () => {
  const myStyle = {
    color: '#fff',
  }

  return (
    <footer style={myStyle}>
      <section>
        <div className="container py-5 ">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="text-center py-5">
                <h5
                  style={{
                    fontFamily: 'var(--font-4)',
                    textShadow: '2px 2px 2px #222',
                  }}
                  className="fs-1"
                >
                  Contatos
                </h5>
                <p className="lh-lg">
                  Solicite orçamentos pelo contatos abaixo:
                </p>

                <img
                  src={ImgLogo}
                  alt="imaLogo"
                  className="w-25 mb-3"                  
                />

                <p>
                  Email:
                  <span className="fst-italic ps-2">rosy.klamt@gmail.com</span>
                </p>
                <p className="lh-lg">
                  Whatsapp:
                  <Link
                    to="https://web.whatsapp.com/send?phone=5551 9694-4233"
                    target="_blank"
                    className="text-decoration-none ps-2 fw-bold text-white"
                  >
                    5551 9694-4233
                  </Link>
                </p>
                <div style={{ fontSize: '3em' }}>
                  <Link
                    to="https://www.instagram.com/rosy.klamt/?locale=en_CA"
                    target="_blank"
                    className="text-white"
                  >
                    <CiInstagram />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/roseli-klamt-388497235/"
                    target="_blank"
                    className="text-white"
                  >
                    <CiLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <Form />
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="text-center pt-5">
                <h5
                  style={{
                    fontFamily: 'var(--font-4)',
                    textShadow: '2px 2px 2px #222',
                  }}
                  className="fs-1"
                >
                  Parcerias
                </h5>

                <Link
                  to="https://soulrebelrio.com/veganrioexperience"
                  target="_blank"
                >
                  <img
                    src={SoulRebelRioLogo}
                    alt="soulRebelRioLogo"
                    className="w-25"
                  />
                </Link>

                <p>
                  Email:
                  <span className="fst-italic ps-2">juju@soulrebelrio.com</span>
                </p>
                <p className="lh-lg">
                  Whatsapp:
                  <Link
                    to="https://web.whatsapp.com/send?phone=5521 98295 0900"
                    target="_blank"
                    className="text-decoration-none ps-2 fw-bold text-white "
                  >
                    5521 98295 0900
                  </Link>
                </p>
                <div style={{ fontSize: '3em' }}>
                  <Link
                    to="https://www.instagram.com/soulrebel.rio/reel/C_N6REIuiYo"
                    target="_blank"
                    className="text-white"
                  >
                    <CiInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CopyRight />
    </footer>
  )
}

export default Footer
