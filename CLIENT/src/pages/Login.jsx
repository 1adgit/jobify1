import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue="adityanavin@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="1234"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the App
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" classname="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
