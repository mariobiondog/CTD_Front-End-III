import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

function App() {
  return (
  <div className="App">

    <h3>Convidados:</h3>
      <ClassComponent nome="Mario" estaNaLista={true}/>
      <ClassComponent nome="Sophis" estaNaLista={false}/>
      <ClassComponent nome="Galbier" estaNaLista={true}/>


    <h3>Tarefa: </h3>
      <FunctionComponent nome="Mario" tarefa="batata-frita"/>   
      <FunctionComponent nome="Sophis" tarefa="pizza"/>   
      <FunctionComponent nome="Pedro" tarefa="bebidas"/>

  </div>
  );
}

export default App;
