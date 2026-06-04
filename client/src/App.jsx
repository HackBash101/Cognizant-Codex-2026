import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/health')
      .then(res => setStatus(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Cognizant CODEX 2025</h1>
      {status ? (
        <div style={{ 
          background: '#e8f5e9', 
          padding: '1rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <p>Status : {status.status}</p>
          <p>Team   : {status.team}</p>
          <p>Node   : {status.node}</p>
        </div>
      ) : (
        <p>Connecting to backend...</p>
      )}
    </div>
  );
}

export default App;