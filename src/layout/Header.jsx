import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaInstagram, FaLinkedin } from "react-icons/fa"

const Header = () => {
  return (
    <nav
      style={{fontFamily: 'var(--font-2)', position:'fixed', zIndex:'100', backgroundColor:'lightgrey', color:'#222' }}
      className="navbar navbar-expand-sm p-0 w-100 opacity-75 shadow-lg "
    >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/" target="_self">
          <img
            style={{ width: '70px' }}
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
                className="nav-link"
                aria-current="page"
                to="/menu"
                target="_self"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" target="_self">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" target="_self">
                Contact
              </Link>
            </li>
          </ul>
          <div className="align-self-end d-none d-sm-flex " >
            <ul className="list-unstyled pt-2 pe-4">
              <li className="nav-item">
                <Link className="nav-link text-decoration-none" to="#" target="_blank">
                  <FaInstagram />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-decoration-none" to="/#" target="_blank">
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