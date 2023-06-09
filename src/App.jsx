import { useState } from 'react';
import './App.css';
import {Header, PersonalInfo, Projects, Footer} from "./componentContainer"
import Matrix from './components/Matrix';

function App() {

  const [animation, setAnimation] = useState(false)

  const handleAnimation = () => {
    setAnimation(!animation)
  }


  return (
    <>
      <Header handleButton={handleAnimation}/>
      {animation && <Matrix />}
      <PersonalInfo />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
