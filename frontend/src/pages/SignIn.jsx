import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInStart, signInSuccess } from "../redux/slice/userSlice";
import { OAuth } from "../components/OAuth";

const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error: errorMessage} = useSelector(state => state.user);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all th field'));
    }
    console.log("Form data==>",formData)
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
        credentials: "include"
    });

      const data = await res.json();

      console.log("data->",data)
      if(data.status === 'error'){
        return dispatch(signInFailure(data.message))
      }
      if(data.status === 'success'){
        dispatch(signInSuccess(data.user))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-7xl mx-auto flex-col md:flex-row gap-10 ">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Parth's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            labore quia ipsa quisquam suscipit iusto.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
           
            <div className="">
              <Label value="You email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                className=""
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <Label value="You password" />
              <TextInput
                type="password"
                placeholder="********"
                className=""
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
             {loading ? (
              <>
              <Spinner size="sm" /> <span className="text-sm ml-1">Loading</span>
              </>
             ) : 'Sign In'}
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color="failure">{errorMessage}</Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignIn;
