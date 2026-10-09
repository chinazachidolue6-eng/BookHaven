export async function searchBooks(query) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12`,
  );

  if (!response.ok) {
    throw new Error(`Book API request failed: ${response.status}`);
  }

  const data = await response.json();

  return data.docs || [];
}

export function transformBook(book) {
  return {
    id: book.key,
    title: book.title || "Unknown title",
    author: book.author_name?.[0] || "Unknown author",
    genre: "Fiction",
    rating: 0,
    pages: book.number_of_pages_median || 0,
    published: book.first_publish_year || "Unknown",
    cover: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "https://via.placeholder.com/300x450?text=No+Cover",
    summary: "No description available.",
  };
}
