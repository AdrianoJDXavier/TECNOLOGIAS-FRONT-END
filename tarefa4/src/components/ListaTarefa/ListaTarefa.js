import React from 'react';

const ListaTarefa = ({ onChange, onDelete, onFocus, value }) => {
  return (
    <div className="container-tarefa">
      <input type='checkbox' className="check"/>
      <div className="list-tarefa">
        <input
          className="inputList"
          value={value}
          onChange={onChange}
          onfocus={onFocus}
        />
      </div>
      <button className='btn-delete' title='Deletar' onClick={onDelete}>X</button>
    </div>
  );
};

export default ListaTarefa;