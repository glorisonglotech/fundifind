import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
   
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Invalid credentials');
      }

      const data = await response.json();
      console.log('Login response:', data);
      const { token, role ,name,isVerified} = data;

      localStorage.setItem('token', token);
      localStorage.setItem('username',name);
      localStorage.setItem('isVerified', isVerified);
      toast.success('Login successful');

      switch (role) {
        case 'fundi':
          navigate('/fundidashboard');
          break;
        case 'recruiter':
          navigate('/recruiterdashboard');
          break;
        case 'admin':
          navigate('/admindashboard');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="grid md:grid-cols-2 h-screen">
      <div className="hidden md:flex items-center justify-center bg-pink-100">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt="Login Illustration"
          className="w-3/4"
        />
      </div>

      <div className="flex flex-col justify-center px-8 py-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          Don't have an account? <a href="/signup" className="text-pink-500 hover:underline">Sign up</a>
        </p>
      </div>
    </section>
  );
}

export default Login;
