import { useContext } from "react";
import { HealthContext } from "../context/HealthContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(HealthContext);

  return (
    <section className="section">
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div className="card cart-item" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="cart-image"
            />

            <div className="cart-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>

            <button
              className="btn"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </section>
  );
};

export default Cart;