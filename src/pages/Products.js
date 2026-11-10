import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const categories = ["All", "Protein", "Creatine", "Vitamins", "Pre-workout"];

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1>Supplements</h1>
      <p className="intro">Search and filter our products.</p>

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
      />

      <div className="filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "btn" : "btn btn-light"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filtered.length === 0 && <p>No products found.</p>}
    </>
  );
};

export default Products;