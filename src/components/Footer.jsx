import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <span className="book-icon">📖</span>
        <h2>BookHaven</h2>
        <p>Explore . Read . Belong</p>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Categories</a>
        <a href="/">Favorites</a>
      </div>
      <div className="social-links">
        <a href="/">🐤</a>
        <a href="/">🐤</a>
        <a href="/">🐤</a>
        <a href="/">🐤</a>
      </div>
    </footer>
  );
}

export default Footer;
