import React, { useEffect, useState } from 'react';
import './ListaTarefa.css'

const ListaTarefa = ({ onChange, onDelete, value }) => {
    const [ListState, setListState] = useState({
        classe: 'inputList',
        condicao: 0,
        oculto: 0,
    });

    useEffect(() => {
        if ((value.split(/\W+/).includes('ler') || value.split(/\W+/).includes('estudar'))) {
            setListState({
                condicao: 1,
            })
        }else{
            setListState({
                condicao: 0,
            })
        }
    }, [value]); 

    return (
        <div className="container-tarefa">
            <input type='checkbox' className="check" />
            <div className="list-tarefa">
                <input
                    className={ListState.condicao === 0 ? 'inputList' : 'inputList inputMark'}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <button className={ListState.oculto === 0 ? 'focusout': 'btn-delete'} title='Deletar' onClick={onDelete}>X</button>
        </div>
    );
};

export default ListaTarefa;