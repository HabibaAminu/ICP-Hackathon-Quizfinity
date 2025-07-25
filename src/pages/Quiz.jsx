import { useState } from 'react';

const questions = [
  {
    question: 'What is ICP?',
    options: ['A token', 'A blockchain protocol', 'A database', 'A messaging app'],
    answer: 1,
  },
  {
    question: 'Which wallet can be used with ICP?',
    options: ['MetaMask', 'Trust Wallet', 'Plug', 'Phantom'],
    answer: 2,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function handleSubmit() {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Time!</h2>
      {done ? (
        <p>You scored {score} out of {questions.length}</p>
      ) : (
        <div>
          <p className="mb-4">{questions[current].question}</p>
          <div className="space-y-2 mb-4">
            {questions[current].options.map((opt, idx) => (
              <label key={idx} className="block">
                <input
                  type="radio"
                  name="option"
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                />{' '}
                {opt}
              </label>
            ))}
          </div>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
            {current + 1 === questions.length ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}