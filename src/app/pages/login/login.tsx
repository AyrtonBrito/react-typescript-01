import { useState } from "react";

export const Login = () => {
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const handdleEntrar = () => {
        console.log(Email);
        console.log(Senha);
    };

    return(
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={Email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type={"password"} value={Senha} onChange={e => setSenha(e.target.value)}/>
                </label>
                <button type="button" onClick={handdleEntrar}>Entrar</button>
            </form>
        </div>
    );
}