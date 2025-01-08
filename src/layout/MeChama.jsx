const MeChama = () => {
  return (
    <div
      style={{
        backgroundColor: '#705c1c',
        color: '#fff',
        fontFamily: 'var(--font-5)',
      }}
      className="text-center p-3 p-lg-5 rounded-2"
    >
      <p className="fs-3" style={{ fontFamily: 'var(--font-5)' }}>
        Quer comer comida boa e
        <span style={{ fontFamily: 'var(--font-4)', padding:'5px' }}>saudável</span> na sua
        casa, mas não tem tempo pra cozinhar?
      </p>
      <p className="fs-2" >
        Me chama que eu preparo tudo pra vc.
      </p>
    </div>
  )
}

export default MeChama
