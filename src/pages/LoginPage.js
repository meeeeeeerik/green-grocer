import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(username, password);
    navigate('/');
  };

  return (
    <div className="mt-32 sm:mt-44 mb-20 container mx-auto px-5">
      <div className="max-w-md mx-auto">
        <h1 className="font-palanquin text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-6"
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="font-opensans border border-gray-300 px-4 py-3 outline-none focus:border-[#517907] transition-colors duration-200"
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="font-opensans border border-gray-300 px-4 py-3 outline-none focus:border-[#517907] transition-colors duration-200"
          />

          <button
            type="submit"
            className="bg-[#D6ECAC] hover:bg-[#517907] text-black hover:text-white transition-colors duration-300 py-3 rounded-full font-opensans text-lg font-semibold mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
