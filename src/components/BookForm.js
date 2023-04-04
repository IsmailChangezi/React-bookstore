import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function BookForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form>
      <input
        type={Text}
        placeholder="Add a title"
        onChange={handleTitleChange}
      />
      <input
        type={Text}
        placeholder="Add an Author"
        onChange={handleAuthorChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
