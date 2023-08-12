import './App.css';
import { Header, PersonalInfo, Projects, Footer, MatrixContainer } from "./componentContainer"
import { Separator } from './components';
import SettingsProvider from './context';

function App() {

  return (
    <>
      <SettingsProvider>
        <Header />
        <MatrixContainer />
        <Separator title="Inicio" />
        <PersonalInfo />
        <Separator title="Proyectos" />
        <Projects />
        <Separator title="Contacto" />
        <Footer />
      </SettingsProvider>
    </>
  );
}

export default App;
