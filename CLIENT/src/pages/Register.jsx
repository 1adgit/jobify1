import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from '../utils/customFetch';
import {toast} from 'react-toastify';

export const action = async({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try{
        await customFetch.post('/auth/register', data);
        toast.success('Registered successfully');
        return redirect('/login');
    }
    catch(error){
        toast.error(error?.response?.data?.msg);
        return error;
    }
    return null;
};
const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting"
  return (
    <Wrapper>
      <Form method ='post' className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          labelText="Name"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
        />
        <FormRow type="text" name="location" />
        <FormRow
          type="email"
          name="email"
         
        />
        <FormRow type="password" name="password"  />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
