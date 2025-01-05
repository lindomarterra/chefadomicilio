import Logo from '../images/logo.png'
import './AnimationIntro.css'

const AnimationIntro = () => {
  return (
    <div >
      <img
        style={{ width: '350px', opacity: '.9' }}
        src={Logo}
        alt="cozinhaAfetiva"
      />
      <p
        style={{
          fontFamily: 'var(--font-7)',
          fontSize: '4em',
          color: 'var(--color8)',
        }}
      >
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
