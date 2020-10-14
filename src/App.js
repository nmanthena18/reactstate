import React from 'react';
import './App.css';

function App() {
  const [state, updateState] = React.useState("")
  return (
    <div className="App">     
        <input test-id="name" type="text" value={state} onChange={(event) => updateState(event.target.value)} />        
    </div>
  );
}

export default App;
