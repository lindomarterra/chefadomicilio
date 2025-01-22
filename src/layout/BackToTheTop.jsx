import { FaArrowUp } from 'react-icons/fa'
import './Backtothetop.css'

const BackToTheTop = () => {
  const backtothetop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <abbr title="back to the top">
      <button
        onClick={backtothetop}
        className="position-fixed bottom-0 end-50 border-0 bg-dark-subtle px-2 py-1 rounded-top-2 z-3 arrow "
      >
          <FaArrowUp className="fs-5 text-black-50 " />
      </button>
    </abbr>
  )
}

export default BackToTheTop
