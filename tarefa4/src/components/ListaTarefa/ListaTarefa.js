import React from 'react';
import './ListaTarefa.css'

const ListaTarefa = ({ onChange, onDelete, value }) => {
    
       var classe = 'list';
    
    
        if (value.includes('ler') || value.includes('escrever')) {
            
                classe = 'inputMark';
            
        }
    
    const classes = `inputList ${classe}`

    return (
        <div className="container-tarefa">
            <input type='checkbox' className="check" />
            <div className="list-tarefa">
                <input
                    className={classes}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <button className='btn-delete' title='Deletar' onClick={onDelete}>X</button>
        </div>
    );
};

export default ListaTarefa;