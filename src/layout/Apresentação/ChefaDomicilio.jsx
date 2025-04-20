import './ChefaDomicilio.css'

const ChefaDomicilio = ({showBtn}) => {
  return (
    <div className="px-3 py-3 container" id="conheca" onMouseEnter={showBtn}>
      <div className="chefaDomicilio_container d-block text-center p-2 rounded-2">
        <h1 className="pt-4 animeOpacity"> Personal chef </h1>
        <p className="p-3 text-center animeOpacity">
          Would you like to have your weekly meals organized in the fridge to
          make your day-to-day life <span>easier</span> without giving up on eating well? I
          offer the preparation of <span>vegan</span> meals for you and your family according
          to your needs, preferences or restrictions.
        </p>

        
      </div>
    </div>
  )
}

export default ChefaDomicilio
