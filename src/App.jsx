import { useState } from 'react';
import './App.css';
import { Header, PersonalInfo, Projects, Footer } from "./componentContainer"
import { Separator } from './components';
import Matrix from './components/Matrix';

function App() {

  const [animation, setAnimation] = useState(false)

  const handleAnimation = () => {
    setAnimation(!animation)
  }
  const handleLanguage = () => {

  }
  const handleLightDark = () => {

  }

  return (
    <>
      <Header handleLanguage={handleLanguage} handleAnimation={handleAnimation} handleLightDark={handleLightDark} />
      {animation && <Matrix />}
      <Separator title="Inicio" />
      <PersonalInfo />
      <Separator title="Proyectos" />
      <Projects />
      <Separator title="Contacto" />
      <Footer />
    </>
  );
}

export default App;
