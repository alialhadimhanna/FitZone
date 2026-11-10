import { Link } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">FUEL YOUR POTENTIAL</span>

          <h1>
            TRAIN SMARTER.
            <br />
            <span>FUEL BETTER.</span>
          </h1>

          <p>
            Discover quality supplements to support
            your fitness journey and reach your goals.
          </p>

          <Link to="/products" className="btn">
            Shop Now <ArrowForwardIcon />
          </Link>
        </div>
      </section>

      <section className="section benefits">
        <div className="grid">
          <div className="card center">
            <FitnessCenterIcon fontSize="large" />
            <h3>Quality Supplements</h3>
            <p>Products for every fitness goal.</p>
          </div>

          <div className="card center">
            <VerifiedIcon fontSize="large" />
            <h3>Trusted Products</h3>
            <p>Clear information and ingredients.</p>
          </div>

          <div className="card center">
            <LocalShippingIcon fontSize="large" />
            <h3>Easy Shopping</h3>
            <p>A simple and convenient experience.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="subtitle">OUR COLLECTION</span>
            <h2>Popular Products</h2>
          </div>

         
        </div>

        <div className="grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>READY TO REACH YOUR GOALS?</h2>
        <p>Find the right supplements for your journey.</p>

        <Link to="/products" className="btn btn-light">
          Explore Products
        </Link>
      </section>
    </>
  );
};

export default Home;