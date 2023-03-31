import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookForm from './components/BookForm';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookForm />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
