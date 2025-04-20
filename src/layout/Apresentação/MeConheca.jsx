import './MeConheca.css'
import chefRosy from '../../images/rose/rosy.jpeg'

const MeConheca = () => {
  return (
    <section style={{ backgroundColor: '#fff' }} className="pt-5 h-100">
      <div className="pt-5 container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="py-3 titleMeConheca"> Get to Know Me:</h4>
            <p> Hello! I`m Rosy! </p>
            <p>
              I love cooking, and I believe that cooking is a form of love (and
              all the other cliches), I have been working with food for over 9
              years, in restaurants, bars, fairs, festivals and inns.
            </p>
            <p>
              I graduated in Gastronomy from the IGA Institute in 2013, and
              since then I have dedicated myself to creating unforgettable
              culinary experiences full of affection.
            </p>
            <p>
              In 2015, I embraced the vegan lifestyle, which inspired me to
              specialize in Plant-Based Cooking. Today, I am an advocate for
              vegan cuisine and strive to create delicious, healthy dishes that
              inspire and educate my clients about the benefits of a plant-based
              diet.
            </p>
            <p>
              With a great passion for food and sustainability, I am always
              looking for new ways to innovate and improve my culinary skills.
            </p>
            <p>
              If you are looking for a unique and authentic gastronomic
              experience, or even to make your day-to-day life easier,
              organizing and leaving everything you are going to eat during the
              week prepared and selected, to optimize your meals, I am here to
              create unforgettable moments for you and your loved ones.
            </p>
            <p>
              Write to me so we can exchange ideas and find the best way to eat
              well and better.
            </p>
            <p> I look forward to cooking for you! </p>
          </div>
          <div className="col-md-6">
            <div className="p-1">
              <img
                src={chefRosy}
                alt="foto Rose Klamt"
                className="w-100 d-block meConhecaRoseImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeConheca
