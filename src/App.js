import React from 'react';
import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SerachForm.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div> 
  );
};

export default App;

