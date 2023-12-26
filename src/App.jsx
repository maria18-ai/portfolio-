import { useState } from 'react'
import './App.css'
import CardsProjetos from './components/CardsProjetos'
import Header from './components/Header'
import Linguagens from './components/Linguagens'

import NavBar from './components/NavBar'
import Projetos from './components/Projetos'
import Titulo from './components/Titulo'
import Contatos from './components/Contatos'
import Footer from './components/Footer'

function App() {

  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <NavBar/>
      <Header/>
      <Linguagens/>
      <Titulo/>
      <Projetos/>

      {/* Logica do modal */}
      <button className='btn_modal' onClick={() => setOpenModal(true)}>Ver Mais</button>

      <CardsProjetos isOpen={openModal}>
        <button className='btn_modal_close' onClick={() => setOpenModal(false)}>
          Fechar
        </button>
      </CardsProjetos>
      {/*  */}

      <Footer/>
    </>
  )
}

export default App
