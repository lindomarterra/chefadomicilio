import Burger from '../images/refeicao/burger2.png'
import Homus from '../images/refeicao/homus2.png'
import './Cardapio.css'

const Cardapio = () => {
  return (
    <section className="container p-5 bg-transparent ">
      {/* burger */}
      <div className="itemCardapio bg-light my-5 rounded-end-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Burger}
              alt="burger-graodebico"
              className="w-100 d-block rounded-end-5"
            />
          </div>
          <div className="col-md-6">
            <h5
              className="py-5 fst-italic"
              style={{ fontFamily: 'var(--font-2)' }}
            >
              Burger de espinafre
            </h5>
            <p
              className="fst-italic pe-2"
              style={{ fontFamily: 'var(--font-1)' }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates facilis alias ex eum atque harum quae recusandae
              praesentium omnis. Aut illo repudiandae neque tempore quam odit
              corporis dolorem fugit vel!
            </p>
          </div>
        </div>
      </div>
      {/* homus */}
      <div className="itemCardapio bg-light my-5 rounded-start-5">
        <div className="row">
          <div className="col-md-6">
            <h5
              className="py-5 fst-italic text-end"
              style={{ fontFamily: 'var(--font-2)' }}
            >
              Homus de grão de bico
            </h5>
            <p
              className="fst-italic text-end ps-2"
              style={{ fontFamily: 'var(--font-1)' }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates facilis alias ex eum atque harum quae recusandae
              praesentium omnis. Aut illo repudiandae neque tempore quam odit
              corporis dolorem fugit vel!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={Homus}
              alt="homus"
              className="w-100 d-block rounded-start-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cardapio
