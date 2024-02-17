import {Link} from 'react-scroll'

import './NavBar.css'

export default function NavBar() {


    return (
        <div>
            <section className='nav'>
                <ul className="nav-links">
                    <li className='links'>
                        <Link to="/" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}>Home</Link>
                    </li>

                    <li className='links'>
                        <Link to="linguagens" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}>Linguagens</Link>
                    </li>

                    <li className='links'>
                        <Link to="projetos" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}>Projetos</Link>
                    </li>
                </ul>

                <a href="https://linktr.ee/mariateo">
                    <li className='btn_contatos'>
                        Contatos
                    </li>
                </a>
                
            </section>
        </div>
    )
}
