import './App.css';
import Greeting from './components/Greeting/' // Aqui ele já pega o index (pq o nome é index)

function App() {

  const user = {
    firstName: 'Turma',
    lastName: '02'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting user={user}/>
      </header>
    </div>
  );
}

export default App;
