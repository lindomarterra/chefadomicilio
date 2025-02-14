import { IoIosArrowUp } from "react-icons/io";


const BackToTheTop = () => {

  const backtothetop = () => {
    window.scrollTo(0, 0)    
  }

  return (
    <button
      onClick={backtothetop}
      title="voltar ao topo"    
      className="bg-dark-subtle position-fixed start-0 bottom-0 border-0 z-3 rounded-5 m-2 p-1 "       
  >
      <IoIosArrowUp className="m-2" />
    </button>
  )
}

export default BackToTheTop
