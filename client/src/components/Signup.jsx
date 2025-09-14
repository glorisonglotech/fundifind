import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('recruiter');
  const navigate = useNavigate();

 
  const handleSignup = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, phone, email, password, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      toast.success('Signup successful, log in to your account');
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="grid md:grid-cols-2 h-screen">
      <div className="hidden md:flex items-center justify-center bg-pink-100">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt="Signup Illustration"
          className="w-3/4"
        />
      </div>

      <div className="flex flex-col justify-center px-8 py-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Create Your Account</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="recruiter">Recruiter</option>
              <option value="fundi">Fundi</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-pink-500 hover:underline">Login</a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
