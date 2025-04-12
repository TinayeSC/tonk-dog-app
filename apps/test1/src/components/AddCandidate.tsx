// src/components/AddCandidate.tsx
import React, { useState } from "react";
import { useCandidateStore } from "../stores/candidateStore";

const AddCandidate: React.FC = () => {
//   const [text, setText] = useState("");
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  const { addCandidate } = useCandidateStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addCandidate(name.trim(), role);
    //   setText("");
      setRole("");
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row space-x-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Candidate Name"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-md"
          >
            {isExpanded ? "−" : "+"}
          </button>
        </div>

        {isExpanded && (
          <div className="pt-2">
            <label htmlFor="role" className="text-sm text-gray-600 mb-1 block">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a role</option>
              <option value="President">President</option>
              <option value="Secretary">Secretary</option>
              <option value="Treasurer">Treasurer</option>
            </select>
          </div>
        )}
      </div>
    </form>
  );
};

export default AddCandidate;