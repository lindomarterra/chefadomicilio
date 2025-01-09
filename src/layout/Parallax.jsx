import './Parallax.css'

import ChefaDomicilio from './ChefaDomicilio'
import NossosServicos from './NossosServicos'

const Parallax = () => {
  return (
    <div className="parallax p-md-3 p-lg-4 p-xl-5">
      <ChefaDomicilio />
      <NossosServicos/>
    </div>
  )
}

export default Parallax
