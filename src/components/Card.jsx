import "../App.css";
const Card = ({
  title,
  editionCount,
  home,
  bookshelf,
  onRemoveFromBookshelf,
}) => {
  const handleAddToBookshelf = () => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    // console.log(storedBooks);
    storedBooks.push({ title, editionCount });
    localStorage.setItem("bookshelf", JSON.stringify(storedBooks));

    // console.log(JSON.parse(localStorage.getItem("bookshelf")));
  };

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-edition">Edition Count: {editionCount}</p>
      {home && (
        <button className="card-button" onClick={handleAddToBookshelf}>
          Add to Bookshelf
        </button>
      )}
      {bookshelf && (
        <button className="card-button" onClick={onRemoveFromBookshelf}>
          Remove
        </button>
      )}
    </div>
  );
};

export default Card;
