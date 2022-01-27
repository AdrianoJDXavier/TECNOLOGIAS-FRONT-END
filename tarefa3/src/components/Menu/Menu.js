import React, { useState } from "react";
import Login from "../Login/Login";
import TextArea from "../TextAres/TextArea";
import './Menu.css';


const Menu = props => {

    const [MenuState, setMenuState] = useState({
        tarefa: 0,
    });
    const tarefa1 = (props) => {
        setMenuState({
            tarefa: 1
        })
    }

    const tarefa2 = (props) => {
        setMenuState({
            tarefa: 2
        })
    }

    return (
        <div>
            <nav id="menu-h">
                <ul>
                    <li><input className="button" type='button' value="Tarefa Login" onClick={tarefa1} /></li>
                    <li><input className="button" type='button' value="Tarefa contador" onClick={tarefa2} /></li>
                </ul>
            </nav>


            
            
            <div>
                {MenuState.tarefa === 1 ? <Login /> : null}
                {MenuState.tarefa === 2 ? <TextArea /> : null}
            </div>

        </div>
    );


}
export default Menu;