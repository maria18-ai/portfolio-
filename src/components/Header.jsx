import React from 'react'
import header from '../img/logo.png'


export default function Header() {
        return (
            <div>
                <header className='container' id='home'>
                    <div className='content'>
                        <span className="blur"></span>
                        <span className="blur"></span>
                        <h4>Programadora Web</h4>
                        <h1>Olá, meu nome é <span>Maria</span></h1>
                        <p>Sou programadora Front-End com experiência de freelancer a um ano.
                        Apaixonada por tecnologia buscando aprender cada dia mais, aproveite para ver meus projetos e meu trabalho nesses 12 meses.</p>
                        <button className='btn'>Conheça meu trabalho</button>

                        <div className="image">
                            <img src={header} alt="Logo de programação" />
                        </div>
                    </div>
                </header>
            </div>
        )
}
