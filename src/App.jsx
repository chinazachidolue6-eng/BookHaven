import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { searchBooks, transformBook } from "./api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import BookGrid from "./components/BookGrid";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";
import books from "./data/books";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [apiBooks, setApiBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // temporary

  async function handleSearch() {
    if (!searchTerm.trim()) return;

    try {
      setIsLoading(true);
      setError("");
      const results = await searchBooks(searchTerm);

      const formattedBooks = results.map(transformBook);

      setApiBooks(formattedBooks);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
              />
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <BookGrid
                books={apiBooks.length > 0 ? apiBooks : books}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                favorites={favorites}
                setFavorites={setFavorites}
                isLoading={isLoading}
                error={error}
              />
              <Banner />
              <Footer />
            </>
          }
        />

        <Route path="/book/:id" element={<BookDetails />} />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
