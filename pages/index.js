import React from 'react';
import { useState, useRef } from 'react'
import Books from '../components/Books';
import SearchBooks from '../components/SearchBooks';
import data from '../data/books.json';

const Home = ({ data }) => {
  const inputRef = useRef(null);
  const [searchString, setSearchString] = useState('');

  const handleSearch = () => {
    setSearchString(inputRef.current.value)
  }

  return (
    <>     
      <SearchBooks 
        searchString={searchString}
        handleSearch={handleSearch}
        inputRef={inputRef}
      /> 
      <Books 
        data={data}
        searchString={searchString}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  }
}

export default Home;