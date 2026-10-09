import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book, favorites, setFavorites }) {
  return (
    <Link to={`/book/${book.id}`} className="book-card">
      <div className="book-cover">
        <img className="book-image" src={book.cover} alt={book.title} />

        <button
          className="favorite-button"
          onClick={(e) => {
            e.preventDefault();

            const isFavorite = favorites.some(
              (favorite) => favorite.id === book.id,
            );

            if (isFavorite) {
              setFavorites(
                favorites.filter((favorite) => favorite.id !== book.id),
              );
            } else {
              setFavorites([...favorites, book]);
            }
          }}
        >
          {favorites.some((favorite) => favorite.id === book.id) ? "♥" : "♡"}
        </button>
      </div>

      <div className="book-info">
        <p className="book-genre">{book.genre}</p>

        <h3>{book.title}</h3>

        <p className="book-author">{book.author}</p>

        <div className="book-rating">
          <span>★</span>
          {book.rating}
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
