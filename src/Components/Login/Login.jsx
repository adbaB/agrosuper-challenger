import React, { useState } from "react";
import { useAuth } from "../../Context/authContext";

export const Login = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!username && !password) return;

    auth.login(username, password);
  };
  const handlerChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={handlerChangeUsername}
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlerChangePassword}
          id="password"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
