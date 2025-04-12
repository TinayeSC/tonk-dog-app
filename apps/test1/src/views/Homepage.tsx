import React from "react";
import AddCandidate from "../components/AddCandidate";
import CandidateList from "../components/CandidateList";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Candidate Management</h1>
        <AddCandidate />
        <CandidateList />
      </div>
    </div>
  );
};

export default HomePage;