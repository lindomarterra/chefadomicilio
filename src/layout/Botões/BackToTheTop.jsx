import { FaArrowUp } from 'react-icons/fa'
import './Backtothetop.css'

const BackToTheTop = () => {

  const backtothetop = () => {
    window.scrollTo(0, 0)    
  }

  return (
      <button
        onClick={backtothetop}        
        className="position-fixed start-0 bottom-50 border-0 bg-dark-subtle py-1 z-3 arrow "
      >
        <span>Back to the top</span>
          <FaArrowUp className="fs-5 text-black-50 " />
      </button>
  )
}

export default BackToTheTop
