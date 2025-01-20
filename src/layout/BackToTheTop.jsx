import { FaArrowUp } from 'react-icons/fa'
import './Backtothetop.css'

const BackToTheTop = () => {
  const backtothetop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button onClick={backtothetop} className="backtothetop p-1">
      <span style={{ fontSize: '0.8em' }}>Back to the Top</span>
      <span className="arrowUp">
        <FaArrowUp className="ms-2 p-1 fs-3" />
      </span>
    </button>
  )
}

export default BackToTheTop
