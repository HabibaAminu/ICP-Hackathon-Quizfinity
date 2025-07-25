import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Reward from './pages/Reward';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;