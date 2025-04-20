import { Link } from 'react-router-dom'

import './NossosServicos.css'

import { ImLink } from 'react-icons/im'

const NossosServicos = () => {
  return (
    <section className="nossoServicos_container">
      <div className="container-md p-md-5 animation_container">
        <h2 className="py-4 "> Service </h2>

        <h4 className="py-2 px-1"> What is it</h4>
        <p>
          Personal Chef is an exclusive personalized vegan cooking service,
          which aims to facilitate access to healthy and tasty food for people
          seeking quality of life.
        </p>
        <p>
          Our proposal focuses on a <strong>Plant Based</strong> diet, a diet
          that does not use any products of animal origin (it is 100% vegetable)
          and prioritizes the most natural and whole foods, avoiding the
          consumption of refined and highly processed foods.
        </p>
        <h4 className="py-2 px-1"> How it works </h4>
        <p>
          We prepare and execute a <strong>weekly menu</strong> for you and your
          family in your own home according to your needs and preferences, thus
          making your day-to-day life easier.
        </p>

        {/* steps */}
        <div className="divsteps py-4 p-2">
          <h5> # Step One: Understanding the Client’s Needs </h5>
          <p>
            - We will discuss your food preferences, dietary restrictions and
            nutritional goals. - We will discuss the type of event or meal you
            would like to have (dinner, lunch, breakfast, meals for the week,
            etc.).
          </p>
          <h5># Step two: Menu Choice </h5>
          <p>
            - Based on the information collected, we will prepare a personalized
            menu that meets your needs and preferences. - Once the menu is
            approved, we will proceed with the preparation of the budget and
            list of ingredients. - The list of ingredients will include all the
            ingredients, utensils and appliances necessary for the preparation
            of the dishes.
          </p>
          <h5># Step Three: Scheduling </h5>
          <p>
            - Once the budget and the list of ingredients have been approved
            (which will be the client's responsibility), we will schedule the
            date and time for the menu to be prepared at your home. - We will
            ensure that all ingredients are available and fresh for the day of
            preparation.
          </p>
          <h5># Step Four: Menu Preparation </h5>
          <p>
            - On the scheduled day, we will arrive at your home and prepare the
            dishes according to the approved menu. - After preparation, we will
            organize the meals in pre-arranged containers, and we will leave the
            kitchen clean and organized as we found it.
          </p>
        </div>

        <h4 className="py-2 px-1 mt-5 ">Others Services</h4>
        <p>
          We also offer strict vegetarian food services for events such as
          catering, coffee breaks and general gatherings. We prepare and deliver
          the entire menu to a location chosen by the client.
        </p>
        <p>
          Our Catering service is in partnership with
          <strong>
            <Link to="https://soulrebelrio.com/catering/" target="_blank">
              Soul Rebel Rio
            </Link>
            <ImLink />
          </strong>
          located in the Santa Teresa neighborhood of RJ, where we also offer
          weekly <strong>brunch</strong> services with prior scheduling via
          <strong>
            <Link
              to="https://wa.me//552182950900?text=Olá! Tudo bem? Obrigada por entrar em contato."
              target="_blank"
              alt="Entrar em contato pelo whatsapp"
            >
              Whatsapp.
            </Link>
          </strong>
        </p>
      </div>
    </section>
  )
}

export default NossosServicos
