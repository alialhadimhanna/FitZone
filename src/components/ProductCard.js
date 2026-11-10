import { useContext } from "react";
import { Link } from "react-router-dom";
import { HealthContext } from "../context/HealthContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(HealthContext);

  return (
    <section className="card product-card">
      <img src={product.image} alt={product.name} />

      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>

      <div className="card-actions">
        <Link to={"/products/" + product.id} className="btn btn-light">
          Details
        </Link>

        <button className="btn" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductCard;