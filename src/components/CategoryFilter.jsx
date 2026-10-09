import "./CategoryFilter.css";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "All",
    "Fiction",
    "Romance",
    "Fantasy",
    "Mystery",
    "Sci-Fi",
    "Biography",
  ];

  return (
    <section className="categories">
      <div className="categories-header">
        <p>Explore</p>

        <h2>Browse by category</h2>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={category === "All" ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;
