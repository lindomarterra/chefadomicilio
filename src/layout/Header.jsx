import { Link } from "react-router-dom"
import Logo from '../images/icon/logo.png'
import { FaInstagram, FaLinkedin } from "react-icons/fa"


const Header = () => {
  return (
    <header
      style={{
        fontFamily: 'var(--font-2)',
        position: 'absolute',
        zIndex: '100',
        //backgroundColor: '#ffffff67'
      }}
      className="navbar navbar-expand-sm w-100"
    >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/" target="_self">
          <img
            style={{ width: '50px' }}
            src={Logo}
            alt="roseklamtchefadomicilio"
            className="pb-2"
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
          <ul
            className="navbar-nav flex-grow-1"
            style={{ fontFamily: 'var(--font-4)' }}
          >
            <li className="nav-item">
              <Link
                style={{ color: 'green' }}
                className="nav-link"
                aria-current="page"
                to="/menu"
                target="_self"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: 'green' }}
                className="nav-link"
                to="/about"
                target="_self"
              >
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: 'green' }}
                className="nav-link"
                to="/contact"
                target="_self"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="align-self-end d-none d-sm-flex ">
            <ul className="list-unstyled pt-2 pe-4">
              <li className="nav-item">
                <Link
                  style={{ color: 'var(--color5)' }}
                  className="nav-link text-decoration-none fw-bolder"
                  to="https://www.instagram.com/rosy.klamt/?locale=en_CA"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: 'var(--color5)' }}
                  className="nav-link text-decoration-none fw-bolder"
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
    </header>
  )
}

export default Header