import React from 'react';
import { loginWithGoogle } from '../authService';

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    const user = await loginWithGoogle();
    if (user) setUser(user);
  };

  return (
    <div className="container">
      <h1 className="glow-text">GHOST AI SYSTEM</h1>
      <p style={{color: '#00f3ff'}}>IDENTIFICATION REQUIRED</p>
      <button onClick={handleLogin} className="execute-btn">
        ACCESS VIA GOOGLE_CORE
      </button>
    </div>
  );
};

export default Login;
