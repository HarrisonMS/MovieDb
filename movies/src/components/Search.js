import React from 'react';

const Search = ({ handleChanges, search }) => {
  return (
    <section className='searchbox-wrap'>
      <input 
        type='text' 
        placeholder='search for a movie' 
        className='searchbox' 
        onChange={handleChanges}
        onKeyPress={search}
      />
    </section>
  )
}

export default Search