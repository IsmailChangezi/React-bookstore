import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Categories from './components/Categories';
import Navigation from './components/Navigation';
import Book from './components/Book';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Book author="world" title="HEllo" />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
