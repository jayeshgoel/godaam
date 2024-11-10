import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './input';
import { Button } from './button';
import { Link } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = { data: { success: true, message: 'Login successful' } };
      if (res.data.success) {
        navigate("/dashboard"); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='relative min-h-screen bg-gray-100 flex items-center justify-center'>
      <form onSubmit={submitHandler} className='w-1/2 max-w-md border border-gray-200 rounded-md p-14 bg-[#f9eec7] shadow-lg'>
        <h1 className='font-bold text-xl mb-5 text-center'>Login</h1>
        <div className='my-2'>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="priyanka@gmail.com"
          />
        </div>
        <div className='my-2'>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder=""
          />
        </div>
        <Button type="submit" className="w-full my-4 hover:bg-gray-600">Login</Button>
        <span className='text-sm'>
          Don't have an account? <Link to="/signup" className='text-[#01AAC1]'>Signup</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
