import React from 'react'
import Counter from './components/Counter'
import './index.css'
function App() {
  const name = 'Counter App'
  return (
    <div className="App">
      <div>
      {/* üst componentten alt componente veri aktarımı yaptık prop gönderdik */}
        <Counter content={name}/> 
      </div>
    </div>
  );
}

export default App;
