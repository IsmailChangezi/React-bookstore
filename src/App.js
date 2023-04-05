import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import Book from './components/Book';
import BookForm from './components/BookForm';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/BookForm" element={<BookForm />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
