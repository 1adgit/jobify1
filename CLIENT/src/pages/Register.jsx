import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          labelText="Name"
          defaultValue="aditya"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="navin"
        />
        <FormRow type="text" name="location" defaultValue="India" />
        <FormRow
          type="email"
          name="email"
          defaultValue="adityanavin@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="1234" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" classname="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
