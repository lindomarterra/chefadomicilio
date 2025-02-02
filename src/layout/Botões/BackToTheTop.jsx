import { IoIosArrowUp } from "react-icons/io";


const BackToTheTop = () => {

  const backtothetop = () => {
    window.scrollTo(0, 0)    
  }

  return (
    <button
      onClick={backtothetop}
      title="voltar ao topo"    
      className="bg-dark-subtle position-fixed start-0 bottom-0 py-0 px-1 border-0 rounded-end-2 z-3"       
  >
      <IoIosArrowUp />
    </button>
  )
}

export default BackToTheTop
