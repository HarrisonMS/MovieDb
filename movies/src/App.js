import React, { useState } from 'react';
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [ state, setState ] = useState({
    s:'',
    results: [],
    selected: {}
  })
  const apiurl = 'http://www.omdbapi.com/?apikey=ae1eb8f2'

  const search = (e) => {
    if (e.key === 'enter') {
      axios(apiurl + '&s=' + state.s).then(({data}) => {
        let results = data.Search;
        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }
  const handleChanges = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s}
    })
    console.log(state.s)
  }
  return (
    <div className="App">
    <header>
      <h1>Movie db</h1>
    </header>
    <main>
      <Search 
        handleChanges={handleChanges}
        search={search}
      />
      <Results 
        results={state.results}
      />
    </main>
    </div>
  );
}

export default App;
