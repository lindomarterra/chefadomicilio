import './MeConheca.css'
import chefRosy from '../../images/rose/rosesemfundo.png'

const MeConheca = () => {
  return (
    <section style={{ backgroundColor: '#fff' }} className="pt-5 h-100">
      <div className="pt-5 container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="py-3 titleMeConheca">Me Conheça:</h4>
            <p>Olá! Eu sou a Rosy!</p>
            <p>
              Amo cozinhar, e acredito que sim cozinhar é um forma de amar (e
              todos os outros cliches), trabalho com comida já a mais de 9 anos,
              em restaurantes, bares, feiras, festivais e pousadas.
            </p>
            <p>
              Me formei em Gastronomia no Instituto IGA em 2013, desde então
              tenho me dedicado a criar experiências culinárias inesquecíveis e
              cheias de afeto.
            </p>
            <p>
              Em 2015, eu adotei o estilo de vida vegano, o que me inspirou a me
              especializar em Cozinha Plant-Based. Hoje, sou uma defensora da
              culinária vegana e me esforço para criar pratos deliciosos e
              saudáveis que inspirem e eduquem os meus clientes sobre as
              vantagens de uma dieta baseada em plantas.
            </p>
            <p>
              Com grande paixão pela comida e pela sustentabilidade, estou
              sempre buscando novas maneiras de inovar e melhorar minhas
              habilidades culinárias.
            </p>
            <p>
              Se você está procurando por uma experiência gastronômica única e
              autêntica, ou ainda facilitar seu dia-a-dia, organizando e
              deixando tudo que vai comer na semana preparado e selecionado,
              para otimizar suas refeições, estou aqui para criar momentos
              inesquecíveis para você e seus entes queridos.
            </p>
            <p>
              Me escreva pra gente trocar uma ideia e encontrar a melhor forma
              para comer bem e melhor.
            </p>
            <p>Espero ansiosamente para cozinhar para você!</p>
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
