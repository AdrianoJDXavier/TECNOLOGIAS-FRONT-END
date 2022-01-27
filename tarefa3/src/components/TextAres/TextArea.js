import React, { useState } from "react";
import './TextArea.css';

const TextArea = props => {

    const [TextAreaState, setTextAreaState] = useState({
        qtd_caracter: 0,
        value: '',
    });

    /* Adiciona a variavel qtd_caracter o total de caracteres digitados */
    const onChangeText = (event) => {
        setTextAreaState({ qtd_caracter: event.target.value.length });
    }

    return (
        <div>
            <textarea value={TextAreaState.value} onChange={onChangeText} placeholder='Digite seu texto aqui!'></textarea>
            <p>Esse texto contém <b>{TextAreaState.qtd_caracter}</b> caracteres</p>
        </div>
    );
}
export default TextArea;