import { useState } from "react";
import Card from "../components/Card";
export default function BookShelf() {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  function removeBook(title, edition) {
    let storedBooks = bookshelf;
    storedBooks = storedBooks.filter((item) => {
      return !(item.title === title && item.editionCount === edition);
    });
    localStorage.setItem("bookshelf", JSON.stringify(storedBooks));
    setBookshelf(storedBooks);
  }

  return (
    <>
      <h2>Your Bookshelf</h2>
      <div className="card-container">
        {bookshelf.map((book, index) => (
          <Card
            key={index}
            bookshelf={true}
            title={book.title}
            editionCount={book.editionCount}
            onRemoveFromBookshelf={() =>
              removeBook(book.title, book.editionCount)
            }
          />
        ))}
      </div>
    </>
  );
}
