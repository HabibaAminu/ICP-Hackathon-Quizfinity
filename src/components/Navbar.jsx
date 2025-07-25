import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">Quizfinity</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/learn" className="hover:underline">Learn</Link>
        <Link to="/quiz" className="hover:underline">Quiz</Link>
        <Link to="/reward" className="hover:underline">Reward</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/landing" className="hover:underline">Landing</Link>
      </div>
    </nav>
  );
}
