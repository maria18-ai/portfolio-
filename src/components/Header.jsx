import './Header.css'
import header from '../img/logo.png'

export default function Header() {
        return (
            <div>
                <header className='container' id='home'>
                    <div className='content'>
                        <span className="blur"></span>
                        <span className="blur"></span>
                        <h4 id='title'>Programadora Web</h4>
                        <h1 id='name'>Olá, meu nome é <span>Maria</span></h1>
                        <p id='text'>Sou programadora Front-End com experiência de freelancer a um ano. 
                        <br></br>
                        Apaixonada por tecnologia buscando aprender cada dia mais, aproveite para ver meus projetos e meu trabalho nesses 12 meses.</p>
                        <button className='btn'><a href="https://linktr.ee/mariateo">Conheça meu trabalho</a></button>

                        <div className="image">
                            <img src={header} alt="Logo de programação" />
                        </div>
                    </div>
                </header>
            </div>
        )
}
