import React from "react";
import { useCandidateStore } from "../stores/candidateStore";

const CandidateList: React.FC = () => {
  const { candidates, deleteCandidate, toggleVote } = useCandidateStore();

  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="bg-white p-4 rounded-md shadow flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">{candidate.name}</h2>
            <p className="text-gray-600 text-sm">{candidate.role}</p>
            <p className="text-gray-600 text-sm">Votes:{candidate.votes}</p>
            
          </div>
          <button
            onClick={() => deleteCandidate(candidate.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => toggleVote(candidate.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Vote
          </button>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;