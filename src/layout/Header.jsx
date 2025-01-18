import { Link } from "react-router-dom"
import Logo from '../images/icon/Rose_Klamt__1_-removebg-preview.png'
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import './Header.css'


const Header = () => {
  return (
    <nav
      style={{
        fontFamily: 'var(--font-2)',
        position: 'absolute',
        zIndex: '100',        
        height:'60px',        
      }}
      className="navbar navbar-expand-sm w-100 shadow-lg "
    >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/" target="_self">
          <img
            style={{ width: '50px' }}
            src={Logo}
            alt="roseklamtcozinhaafetiva"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link
                className="nav-link fw-bolder "
                aria-current="page"
                to="/menu"
                target="_self"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder" to="/about" target="_self">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder" to="/contact" target="_self">
                Contact
              </Link>
            </li>
          </ul>
          <div className="align-self-end d-none d-sm-flex ">
            <ul className="list-unstyled pt-2 pe-4">
              <li className="nav-item">
                <Link
                  className="nav-link text-decoration-none fw-bolder text-black-50"
                  to="https://www.instagram.com/rosy.klamt/?locale=en_CA"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-decoration-none fw-bolder text-black-50"
                  to="https://www.linkedin.com/in/roseli-klamt-388497235/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header