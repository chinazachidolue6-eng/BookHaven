import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import "./Favorites.css";

function Favorites({ favorites, setFavorites }) {
  return (
    <>
      <Navbar />
      <main className="favorites-page">
        <Link to="/" className="back-button">
          ← Back to books
        </Link>

        <div className="favorites-header">
          <p>YOUR COLLECTION</p>
          <h1>Favorite Books</h1>
        </div>

        {favorites.length > 0 ? (
          <div className="favorites-grid">
            {favorites.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </div>
        ) : (
          <div className="empty-favorites">
            <h2>No favorites yet</h2>
            <p>Books you save will appear here.</p>

            <Link to="/" className="browse-button">
              Browse Books
            </Link>
          </div>
        )}
      </main>
    </>
  );
}

export default Favorites;
