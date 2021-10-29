import Header from './components/Header';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.css';

function App() {

  const textPofexo = "Segue o projeto do pofexô";

  const buttonText = "Inscrever-me"

  const site = "www.pofexo.com.br"

  return (
    <div>
      <Header pofexo={textPofexo}/>
      <main>
        <Galeria buttonInscrever={buttonText}/>
      </main>
      <Footer siteDoPofexo={site}/>
    </div>
  );
}

export default App;
