import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  return (
    <main className="book-details">
      <Link to="/" className="back-button">
        ← Back to books
      </Link>

      <div className="book-details-content">
        <div className="details-cover">
          <img src={book.cover} alt={book.title} />
        </div>

        <div className="details-info">
          <p className="details-genre">{book.genre}</p>

          <h1>{book.title}</h1>

          <p className="details-author">By {book.author}</p>

          <div className="details-rating">
            <span>★</span>
            {book.rating}
          </div>

          <p className="details-summary">{book.summary}</p>

          <div className="book-meta">
            <div>
              <span>Pages</span>
              <strong>{book.pages}</strong>
            </div>

            <div>
              <span>Published</span>
              <strong>{book.published}</strong>
            </div>

            <div>
              <span>Genre</span>
              <strong>{book.genre}</strong>
            </div>
          </div>

          <button className="details-favorite">♡ Add to Favorites</button>
        </div>
      </div>
    </main>
  );
}

export default BookDetails;
