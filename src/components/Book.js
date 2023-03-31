import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm';

export default function Book({ title, author }) {
  return (
    <>
      <section>
        <h1>{author}</h1>
        <h2>{title}</h2>
        <button type="submit">Remove Book</button>
      </section>
      <BookForm />
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
