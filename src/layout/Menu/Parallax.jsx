import './Parallax.css'
import Cardapio from './Cardapio'
import Catering from './Catering'

const Parallax = () => {
  return (
    <div className="parallax" >
      <div className="pelicula_parallax">
        <Cardapio />
        <Catering />
      </div>
    </div>
  )
}

export default Parallax
