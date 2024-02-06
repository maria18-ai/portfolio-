import { useState } from 'react'
import './App.css'
import CardsProjetos from './components/CardsProjetos'
import Header from './components/Header'

import NavBar from './components/NavBar'
import Projetos from './components/Projetos'
import Titulo from './components/Titulo'
import Footer from './components/Footer'

import CardLinguagens from './components/CardLinguagens'

function App() {

  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <NavBar/>
      <Header/>

      {/* linguagens */}
      <h2 className="header">LINGUAGENS </h2>

      <CardLinguagens 
        icone={<i class="ri-javascript-line"></i>}
        linguagem={'JavaScript(ES6)'}
        desc={ 'Aprofundei meus conhecimentos em JavaScript através da execução de diversos projetos, enfrentando desafios técnicos com o uso dessa linguagem.'}
      />

      <CardLinguagens 
        icone={<i class="ri-reactjs-line"></i>}
        linguagem={'React Js'}
        desc={ 'Tenho dedicado tempo ao trabalho e estudo do framework React, demonstrando afinidade e facilidade de aprendizado ao incorporar novos recursos dessa biblioteca.'}
      />

      <CardLinguagens 
        icone={<i class="ri-html5-line"></i>}
        linguagem={'HTML 5'}
        desc={ 'Possuo um sólido conhecimento e habilidade avançada em HTML5.'}
      />

      <CardLinguagens 
        icone={<i class="ri-css3-line"></i>}
        linguagem={'CSS 3'}
        desc={ 'Tenho domínio avançado em CSS 3 e profundo conhecimento na técnica de estilização.'}
      />  

      <CardLinguagens 
        icone={<i class="ri-angularjs-line"></i>}
        linguagem={'Angular JS'}
        desc={'Estou aprimorando meu conhecimento no uso do framework Angular, destacando-me pela flexibilidade e habilidade na utilização dessa biblioteca.'}
      />

      <CardLinguagens 
        icone={""}
        linguagem={'MySQL'}
        desc={' Apresento proficiência em MySQL e em gerenciamento de banco de dados, com notável facilidade e flexibilidade na aplicação da tecnologia de banco de dados.'}
      />




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
