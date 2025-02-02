import { IoIosArrowUp } from "react-icons/io";
import './Backtothetop.css'

const BackToTheTop = () => {

  const backtothetop = () => {
    window.scrollTo(0, 0)    
  }

  return (
    <button
      onClick={backtothetop}
      title="voltar ao topo"      
  >
      <IoIosArrowUp className="arrow" />
    </button>
  )
}

export default BackToTheTop
