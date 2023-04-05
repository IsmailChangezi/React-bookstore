import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book() {
  const list = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <section>
      <ul>
        {list.map((items) => (
          <div key={items.id}>
            <h1>{items.title}</h1>
            <p>
              by
              {items.author}
            </p>
            <button
              type="submit"
              onClick={() => {
                dispatch(removeBook(items.id));
              }}
            >
              remove book
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
}
