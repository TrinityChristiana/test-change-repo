'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Signin() {
  const { setUser } = useAuth();

  const [code, setCode] = useState('');
  const [errorMessage, setError] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setError(error);
    } else {
      const { user } = await res.json();
      localStorage.setItem('user', code);
      setUser(user);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <input className="border border-gray-300 rounded px-4 py-2 mb-2 w-full max-w-xs" placeholder="Enter access code" value={code} onChange={(e) => setCode(e.target.value)} />
      <button type="button" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800" onClick={handleLogin}>
        Login
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default Signin;
