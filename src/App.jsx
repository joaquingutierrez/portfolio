import './App.css';
import {Header, Personal_Info, Projects, Footer} from "./componentContainer"
import Matrix from './components/Matrix';

function App() {
  return (
    <>
      <Header />
      <Matrix canvasHeight={1000} canvasWidth={window.innerWidth} />
      <Personal_Info />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
