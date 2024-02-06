import './CardLinguagens.css'

function CardLinguagens({icone, linguagem, desc}) {
    return (
        <>
        <section className='container'>
            <div className="features">
                <div className="card">
                <span>{icone}</span>
                <h4>{linguagem}</h4>
                <p>
                {desc}
                </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default CardLinguagens