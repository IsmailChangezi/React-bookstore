import React from 'react';

export default function BookForm() {
  return (
    <form>
      <input type={Text} placeholder="Add a title" />
      <input type={Text} placeholder="Add an Author" />
      <button type="submit">Submit</button>
    </form>
  );
}
