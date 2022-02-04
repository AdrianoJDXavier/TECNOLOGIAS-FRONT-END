import logo from './logo.svg';
import './App.css';
import NovaTarefa from './components/NovaTarefa/NovaTarefa';
import ListaTarefa from './components/ListaTarefa/ListaTarefa'
import { useState } from 'react';
import Menu from './components/Menu/Menu';


const App = () => {
const [tarefas, setTarefas] = useState([]);

const addNovaTarefa = (task) => {
  const copiaTarefa = Array.from(tarefas);
  copiaTarefa.push({ id: tarefas.length, value: task });
  setTarefas(copiaTarefa);
}

const AtualizaTarefa = ({ target }, index) => {
  const copiaTarefa = Array.from(tarefas);
  copiaTarefa.splice(index, 1, { id: index, value: target.value });
  setTarefas(copiaTarefa);
}

const deleteTarefa = (index) => {
  const copiaTarefa = Array.from(tarefas);
  copiaTarefa.splice(index, 1);
  setTarefas(copiaTarefa);
}


  return (
    <div className="App">
      <div>
        <Menu logo={logo}/>
        <NovaTarefa onSubmit={addNovaTarefa} />
        {tarefas.map(({ id, value }, index) => (
          <ListaTarefa
            key={id}
            value={value}
            onChange={(event) => AtualizaTarefa(event, index)}
            onDelete={() => deleteTarefa(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
