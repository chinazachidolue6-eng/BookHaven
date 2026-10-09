import "./BookGrid.css";
// import books from "../data/books";
import BookCard from "./BookCard";

function BookGrid({
  books,
  selectedCategory,
  searchTerm,
  favorites,
  setFavorites,
  isLoading,
  error,
}) {
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.genre === selectedCategory;

    // const matchesSearch =
    //   book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   book.author.toLowerCase().includes(searchTerm.toLowerCase());

    // console.log("searchTerm:", searchTerm);
    // console.log("books:", books);

    return matchesCategory;
  });

  return (
    <section className="books-section">
      {isLoading && (
        <div className="loading-message">
          <p>Searching for books...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <div className="books-header">
        <div>
          <p>OUR COLLECTION</p>
          <h2>Popular Books</h2>
        </div>

        <button className="view-all">View all →</button>
      </div>

      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No books found</h3>
            <p>
              We couldn't find any books matching your search. Try a different
              title or author.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BookGrid;
