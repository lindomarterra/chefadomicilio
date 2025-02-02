import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../images/icon/newLogo.png'
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { TfiMenu } from 'react-icons/tfi'
import { RiCloseLargeFill } from 'react-icons/ri'
import { useState } from 'react'


const Header = ({showBtn}) => {

  const [burgerShow, setBurgerShow]=useState(true)

  const burgerFunction = () => {
    setBurgerShow(!burgerShow)
  }

  return (
    <header>
      <nav
        style={{
          fontFamily: 'var(--font-2)',
          position: 'absolute',
          zIndex: '100',
          backgroundColor: '#ffffffd3 ',
        }}
        className="navbar navbar-expand-md w-100 shadow-lg"
      >
        <div className="container">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span onClick={burgerFunction}>
              {burgerShow ? <TfiMenu /> : <RiCloseLargeFill />}
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav flex-grow-1"
              style={{ fontFamily: 'var(--font-4)' }}
            >
              <li className="nav-item">
                <Link
                  onClick={showBtn}
                  style={{ color: 'green' }}
                  className="nav-link pointer-event"
                  aria-current="page"
                  to="/pagecardapio"
                  target="_self"
                >
                  Cardápio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={showBtn}
                  style={{ color: 'green' }}
                  className="nav-link pointer-event"
                  aria-current="page"
                  to="/pagegaleria"
                  target="_self"
                >
                  Galeria
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={showBtn}
                  style={{ color: 'green' }}
                  className="nav-link"
                  to="/pagemeconheca"
                  target="_self"
                >
                  Me Conheça
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={showBtn}
                  style={{ color: 'green' }}
                  className="nav-link"
                  to="/pagecontato"
                  target="_self"
                >
                  Contato
                </Link>
              </li>
            </ul>
            <div className="align-self-end d-none d-md-flex ">
              <ul className="list-unstyled pt-2 pe-4">
                <li className="nav-item">
                  <a
                    style={{ color: 'var(--color5)' }}
                    className="nav-link text-decoration-none fw-bolder"
                    href="https://www.instagram.com/rosy.klamt/?locale=en_CA"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: 'var(--color5)' }}
                    className="nav-link text-decoration-none fw-bolder"
                    href="https://www.linkedin.com/in/roseli-klamt-388497235/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header