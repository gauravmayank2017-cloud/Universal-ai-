import React, { useState, useEffect } from 'react';
import { auth } from './authService';
import Login from './components/Login';
import { processTask } from './AiAgent';
import './assets/glitch-effect.css';

function App() {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("Awaiting commands...");

  // चेक करें कि यूजर पहले से लॉग-इन है या नहीं
  useEffect(() => {
    auth.onAuthStateChanged((u) => { if (u) setUser(u); });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  const handleAction = async () => {
    setResponse(">> ACCESSING GEMINI_CORE...");
    const aiResponse = await processTask(input, user.uid);
    setResponse(aiResponse);
    setInput("");
  };

  return (
    <div className="container">
      <header style={{width: '80%', display: 'flex', justifyContent: 'space-between'}}>
        <span className="glow-text">LOGGED_IN: {user.displayName}</span>
        <button onClick={() => auth.signOut().then(()=>setUser(null))} className="execute-btn" style={{height: '30px', padding: '5px'}}>LOGOUT</button>
      </header>
      
      <div className="terminal">
        <p style={{color: '#555'}}>-- SYSTEM LOG v2.0.26 --</p>
        <p>{response}</p>
      </div>

      <div style={{width: '80%', display: 'flex'}}>
        <input 
          className="cyber-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter root command..."
          onKeyPress={(e) => e.key === 'Enter' && handleAction()}
        />
        <button onClick={handleAction} className="execute-btn">EXECUTE</button>
      </div>
    </div>
  );
}

export default App;
