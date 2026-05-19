import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeHandle = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    console.log(loginData);
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={changeHandle}
          placeholder="Enter Email"
        />

        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={changeHandle}
          placeholder="Enter Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
