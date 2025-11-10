import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Connecting to backend...');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage('❌ Could not connect to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>History Reimagined</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
