import "./Hero.css";

function Hero({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">WELCOME TO BOOK HAVEN</p>

        <h1>
          Find your next <span>great read.</span>
        </h1>

        <p className="hero-description">
          Discover thousands of books, explore new authors, and find stories
          that stay with you.
        </p>

        <div className="hero-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for a book, author or genre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={onSearch}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
