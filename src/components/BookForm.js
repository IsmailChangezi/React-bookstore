import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Book from './Book';

export default function BookForm() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const uniq = `id${new Date().getTime()}`;
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uniq,
        author,
        title,
        category: 'null',
      }),
    );
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a title"
          onChange={handleTitleChange}
          value={title}
        />
        <input
          type="text"
          placeholder="Add an Author"
          onChange={handleAuthorChange}
          value={author}
        />
        <button type="submit">Submit</button>
      </form>
      <Book />
    </>
  );
}
