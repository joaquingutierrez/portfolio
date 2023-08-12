import './App.css';
import Main from "./componentContainer/Main"
import SettingsProvider from './context';

function App() {

  return (
    <SettingsProvider>
      <Main />
    </SettingsProvider>
  );
}

export default App;
