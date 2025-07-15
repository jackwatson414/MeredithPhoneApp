import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const interestsList = ['Sports', 'Clubs', 'Subjects'];

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');
  const [grade, setGrade] = useState('9');
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userProfile = {
      name,
      role,
      grade,
      interests,
    };

    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    navigate('/feed/grade' + grade);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Complete Your Profile</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Student</option>
            <option>Parent</option>
            <option>Staff</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Grade</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            {[9, 10, 11, 12].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Interests</label>
          <div className="flex gap-2 flex-wrap">
            {interestsList.map((item) => (
              <button
                type="button"
                key={item}
                className={`px-3 py-1 rounded border ${interests.includes(item) ? 'bg-blue-600 text-white' : 'bg-white'}`}
                onClick={() => toggleInterest(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default ProfileSetup; 