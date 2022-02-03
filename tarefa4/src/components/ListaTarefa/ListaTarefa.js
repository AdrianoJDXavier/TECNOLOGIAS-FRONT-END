import React, { useState } from 'react';
import './ListaTarefa.css'

const ListaTarefa = ({ onChange, onDelete, value }) => {
    const [Tarefa, setTarefa] = useState({
        classe: 'inputList',
    })

    if ((value.split(/\W+/).includes('ler') || value.split(/\W+/).includes('estudar'))) {
        setTarefa({
            classe: 'inputList inputMark',
        })
    }


    return (
        <div className="container-tarefa">
            <input type='checkbox' className="check" />
            <div className="list-tarefa">
                <input
                    className={Tarefa.classe}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <button className='btn-delete' title='Deletar' onClick={onDelete}>X</button>
        </div>
    );
};

export default ListaTarefa;