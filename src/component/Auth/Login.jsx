import { useState } from "react";

const Login = ({ handleLogin, onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Employee Management</h1>
          <p>Sign in to manage tasks, approvals, and employee workflows.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">
            Email
            <input
              type="email"
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="login-label">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              color: "#9ca3af",
              fontSize: "14px",
              cursor: "pointer",
              marginTop: "20px",
              width: "100%",
              textAlign: "center"
            }}
          >
            ← Back to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default Login