import Logo from '../images/logo.png'
import './AnimationIntro.css'

const AnimationIntro = () => {
  return (
    <div >
      <img src={Logo} alt="cozinhaAfetiva" />
      <p className='suaChefAnimation' >
        <span className="textAnimation-1">Sua</span>
        <span> </span>
        <span className="textAnimation-2">Chef</span>
        <span> </span>
        <span className="textAnimation-3">à</span>
        <span> </span>
        <span className="textAnimation-4">Do</span>
        <span className="textAnimation-5">mi</span>
        <span className="textAnimation-6">cì</span>
        <span className="textAnimation-7">lio</span>
      </p>
    </div>
  )
}

export default AnimationIntro
