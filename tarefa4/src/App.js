import logo from './logo.svg';
import './App.css';
import NovaTarefa from './components/NovaTarefa/NovaTarefa';
import { useState } from 'react';


const App = () => {
const [tarefas, setTarefas] = useState([]);

const addNovaTarefa = (task) => {
  const copiaTarefa = Array.from(tarefas);
  copiaTarefa.push({ id: tarefas.length, value: task });
  setTarefas(copiaTarefa);
}

  return (
    <div className="App">
      <NovaTarefa onSubmit={addNovaTarefa} />
    </div>
  );
}

export default App;
