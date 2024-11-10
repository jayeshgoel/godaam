import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = { data: { success: true, message: 'Signup successful' } };
      if (res.data.success) {
        navigate("/dashboard"); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={submitHandler} className="w-1/2 max-w-md border border-gray-200 rounded-md p-14 bg-[#f9eec7] shadow-lg">
        <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>
        <div className="my-2">
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            placeholder="Priyanka Singh"
          />
        </div>
        <div className="my-2">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="priyanka@gmail.com"
          />
        </div>
        <div className="my-2">
          <Label>Phone Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={changeEventHandler}
            placeholder="8888981374"
          />
        </div>
        <div className="my-2">
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder=""
          />
        </div>
        <Button type="submit" className="w-full my-4 hover:bg-gray-600">Signup</Button>
        <span className="text-sm">
          Already have an account? <Link to="/login" className="text-[#01AAC1]">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
