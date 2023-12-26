import React, { useState } from 'react'
import {Link} from 'react-scroll'
import Contatos from './Contatos'

export default function NavBar() {

    const [openContacts, setOpenContacts] = useState(false);

    return (
        <div>
            <section className='nav'>
                <ul className="nav-links">
                    <li className='links
                    '><Link to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={100} 
                    duration={500}>Home</Link></li>

                    <li className='links
                    '><Link to="linguagens" 
                    spy={true} 
                    smooth={true} 
                    offset={100} 
                    duration={500}>Linguagens</Link></li>
                    
                    <li className='links
                    '><Link to="projetos" 
                    spy={true} 
                    smooth={true} 
                    offset={100} 
                    duration={500}>Projetos</Link></li>

                    <li className='links
                    '><Link to="sobre" 
                    spy={true} 
                    smooth={true} 
                    offset={100} 
                    duration={500}>Sobre</Link></li>
                </ul>

                
                <li className='btn_contatos' onClick={() => setOpenContacts(!openContacts)}>
                    Contatos
                </li>
                
            </section>
            {openContacts && <Contatos />}
        </div>
    )
}
