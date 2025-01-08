import './Parallax.css'

import MeChama from './MeChama'
import CozinhaAfetiva from './CozinhaAfetiva'
import NossosServicos from './NossosServicos'

const Parallax = () => {
  return (
    <div className="parallax p-2 p-md-3 p-xl-5">
      <MeChama />
      <CozinhaAfetiva />
      <NossosServicos />
    </div>
  )
}

export default Parallax
