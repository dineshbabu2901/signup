import React, { useState } from "react";
import "./Signin.css";
import { signup } from "../apis/sign";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // Here you can perform further validation or send data to your backend for signup
    signup(email, password, confirmPassword).then((res) => {
      console.log(res, "jack");
      localStorage.setItem("authToken", res.data.token);
      // history.push("/sign");
      navigate("/signin");
    });
    // Reset fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  return (
    <div className="signin-container">
      <h2>Signup</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
