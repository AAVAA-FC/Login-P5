import './LogMenu.css';
import { useState } from 'react';

function LoginMenu() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = { email: username, password: password };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log(response);
        alert('Exito al iniciar sesión');
      } else {
        alert('Correo o contraseña inválidos.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error. Por favor intenta ingresar más tarde');
    }
  };

  return (
    <div className="login-menu">
        <div className="login-card">
            <h2>Ingresar</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input type="text" id="username" name="username" onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}

export default LoginMenu;
