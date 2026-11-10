import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HealthContext } from "../context/HealthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const { cart } = useContext(HealthContext);

  return (
    <nav className="navbar">
     <NavLink to="/" className="logo">
     <img src="/image/logo.jpeg" alt="FitZone Logo" />
     FitZone
     </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart" className="cart">
        <ShoppingCartIcon fontSize="small"/>
        Cart ({cart.lenght})</NavLink>
        <NavLink to="/login" className="login-btn">
          <LoginIcon fontSize="small" /> Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;