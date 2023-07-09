import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <h1 className="titulo-login">Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo</label><br></br>
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="ejemplo@gmail.com" 
                id="email" 
                name="email" /><br/>
                <label htmlFor="password">Contraseña</label><br></br>
                <input 
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" /><br/>
                <button className="btn-iniciar-sesion" type="submit">Iniciar Sesión</button><br/>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿No tienes una cuenta? Registrate aqui.</button>
        </div>
    )
}