import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useHistory
import { signin } from "../apis/sign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import eye and eye-slash icons

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    signin(email, password).then((res) => {
      console.log(res, "jack");
      localStorage.setItem("authToken", res.data.token);
      navigate("/fan");
    });
 
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Password toggle icon */}
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            />
          </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
      {/* Link to SignUp page */}
      <p className="paragraph">
        Don't have an account? <Link to="/SignUp">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
