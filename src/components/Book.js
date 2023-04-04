import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import booksSlice, { removeBook } from "../redux/books/booksSlice";

export default function Book() {
  const list = useSelector((state) => state.items);
  const dispatch = useDispatch();
  return (
    <section>
      <ul>
        {list.map((items) => {
          return (
            <div key={items.id}>
              <h1>{items.title}</h1>
              <p>by {items.author}</p>
              <button
                onClick={() => {
                  dispatch(removeBook(items.id));
                }}
              >
                remove book
              </button>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
