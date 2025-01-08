const MeChama = () => {
  return (
    <div
      style={{
        backgroundColor: '#adb84f',
        color: '#222222b6',
        fontFamily: 'var(--font-8)',
      }}
      className="text-center p-2 p-lg-5 rounded-2"
    >
      <p className="fs-3">
        Quer comer comida boa e
        <span
          className="p-3 fst-italic"
          style={{ fontFamily: 'var(--font-4)' }}
        >
          saudável
        </span>
        na sua casa, mas não tem tempo pra cozinhar?
      </p>
      <p className="fs-2">Me chama que eu preparo tudo pra vc.</p>
    </div>
  )
}

export default MeChama
