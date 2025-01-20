import Cardapio from './Cardapio'
import './Parallax.css'
import SujestaoCardapio from './SujestaoCardapio'


const Parallax = () => {
  return (
    <div className="parallax">
      <div className='pelicula_parallax' >
        <SujestaoCardapio/>
        <Cardapio />
      </div>
    </div>
  )
}

export default Parallax
