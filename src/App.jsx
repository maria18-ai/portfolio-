
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'

import Titulo from './components/Titulo'
import Footer from './components/Footer'
import CardLinguagens from './components/CardLinguagens'
import SliderProjetos from './components/SliderProjetos'

function App() {


  return (
    <>
      <NavBar/>
      <Header/>
      <CardLinguagens />
      <Titulo/>
      <SliderProjetos />
      <Footer/>
    </>
  )
}

export default App
