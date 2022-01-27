import React, { useState } from "react";
import './Login.css';

const Login = props => {

    const [LoginState, setLoginState] = useState({
        logado: 'Logar',
        estado: 'Por favor faça o login',
        image: 'circle.png',
    });
    const logar = (props) => {
        if (LoginState.logado === 'Logar') {
            setLoginState({
                logado: 'Logout',
                estado: 'Seja bem vindo!',
                image: 'aproved.png'
            })
        } else {
            setLoginState({
                logado: 'Logar',
                estado: 'Por favor faça o login!!',
                image: 'circle.png'
            })
        }
    }

    return (
        <div>
            <div>
                <h2>{LoginState.estado}</h2>
                <div className="divImg">
                <img className="imageLogin" alt="" src={LoginState.image} />
                </div>
            </div>
            <input className="button" type='button' value={LoginState.logado} onClick={logar} />
        </div>
    );


}
export default Login;