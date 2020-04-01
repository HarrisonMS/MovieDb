import React from 'react';
import Result from './Result'

const Results = ({ results }) => {
  return (
    <div>
      <section className='results'>
        {results.map(result => (
          <Result key={result.imdbID} result={result} />
        ))}
      </section>
    </div>
  )
}

export default Results