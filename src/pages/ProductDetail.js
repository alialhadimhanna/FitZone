import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section className="card">
        <h2>Product not found</h2>
        <Link to="/products" className="btn">Back to products</Link>
      </section>
    );
  }

  return (
    <section className="card">
      <img
      src={product.image}
      alt={product.name}
      className="product-detail-image"/>

      <span className="tag">{product.category}</span>
      <h1>{product.name}</h1>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
      <h3>Benefits</h3>
      <ul>
        {product.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <Link to="/products" className="btn">Back to products</Link>
    </section>
  );
};

export default ProductDetail;