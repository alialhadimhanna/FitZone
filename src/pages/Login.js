import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    alert("Welcome, " + username + "!\nYour email is: " + email);
  };

  return (
    <>
      <h1>Login</h1>
      <p className="intro">Enter your details to continue.</p>

      <section className="card login-card">
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;