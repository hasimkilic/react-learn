import React from 'react'
import './App.css';
import Content from './components/Content';
import SiteProvider from './context/siteContext';
function App() {
  return (
    <div>
      <SiteProvider >
        <Content/>
      </SiteProvider>
    </div>
  );
}

export default App;
