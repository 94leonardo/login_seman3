import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="wrapper">
      <div className="row justify-content-center">
        <div className="col-md-6 logo">
          <form>
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mb-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
