import React, { useState } from "react";

const Login = props => {
var result
    const [LoginState, setLoginState] = useState({
        logado: 0,
    });

    const logar = (event) => {
        setLoginState({ logado: event.target.value });
        if(setLoginState.logado === 'Logar'){
            result = '<p>Logou</p>'
        }
    }


    return (
        <div>
            <div>
                {result}
            </div>
            <input type='button' value='Logar' onClick={logar} />
        </div>
    );


}
export default Login;