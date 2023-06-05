import { useEffect, useRef } from 'react';
import './App.css';
import {Header, PersonalInfo, Projects, Footer} from "./componentContainer"
import Matrix from './components/Matrix';

function App() {

  let canvasWidth = useRef(0)
  let canvasHeight = useRef(0)


  useEffect(()=>{
    const body = document.body

    canvasWidth.current = body.clientWidth
    canvasHeight.current = body.clientHeight


  }, [canvasWidth,canvasHeight])

  return (
    <>
      <Header />
      <Matrix canvasHeight={canvasHeight.current} canvasWidth={canvasWidth.current} />
      <PersonalInfo />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
