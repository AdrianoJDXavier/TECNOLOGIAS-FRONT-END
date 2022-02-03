import React, { useState } from 'react';
import './NovaTarefa.css';

const NovaTarefa = ({ onSubmit }) => {

  const [newTarefa, setNewTarefa] = useState({
    tarefa: '',
  });

  const NovaTarefa = ({ target }) => {
    setNewTarefa(target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    onSubmit(newTarefa);
    limpaCampo();
  }

  const limpaCampo = () => {
    setNewTarefa({
      tarefa: '',
    })
  }

  return (
    <div className='div_form'>
      <form onSubmit={submit}>
        <div className="input-container">
          <input id="tarefa" className="input" value={newTarefa.tarefa} type="text" pattern=".+" required onChange={NovaTarefa} />
          <label className="label" htmlFor="tarefa">Digite a tarefa</label>
        </div>
        <button className='btn-submit' type="submit">
          +
        </button>
      </form>
    </div>
  )
};

export default NovaTarefa;