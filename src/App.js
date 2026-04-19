import React, { useState } from 'react';
import { processTask } from './AiAgent';

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("Standing by, Commander...");

  const handleAction = async () => {
    setResponse("AI is thinking...");
    const aiResponse = await processTask(input, "user_007");
    setResponse(aiResponse);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.glowText}>GHOST AI SYSTEM</h1>
      <div style={styles.terminal}>
        <p>{response}</p>
      </div>
      <input 
        style={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Command your AI..."
      />
      <button onClick={handleAction} style={styles.button}>EXECUTE</button>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#0a0a0a', color: '#00ff41', height: '100vh', padding: '50px', fontFamily: 'Courier New' },
  glowText: { textAlign: 'center', textShadow: '0 0 10px #00ff41' },
  terminal: { border: '1px solid #00ff41', padding: '20px', height: '300px', marginBottom: '20px', overflowY: 'scroll' },
  input: { width: '80%', padding: '10px', background: 'transparent', border: '1px solid #00ff41', color: '#00ff41' },
  button: { padding: '10px 20px', marginLeft: '10px', cursor: 'pointer', backgroundColor: '#00ff41', color: 'black', border: 'none', fontWeight: 'bold' }
};

export default App;
