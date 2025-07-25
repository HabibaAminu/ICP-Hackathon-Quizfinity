import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Web3Auth from './pages/Web3Auth';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/web3auth" element={<Web3Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;