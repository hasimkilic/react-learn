import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios'
function App() {
  const [hits,setHits] = useState([]);
  const [query,setQuery] = useState("covid19")

  useEffect(()=>{
    const fetchData =  async () => {
      const { data } = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      setHits(data.hits)
    }
    fetchData();
  },[query])
  //
  return (
    <div className="App">
      <input type="text" onChange={e => setQuery(e.target.value)}/>
      <ul>
        {
          hits.map(hit => {
            return (
              <li key={hit.ObjectID}>{hit.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
