import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedCandidates");
    setSavedCandidates(saved ? JSON.parse(saved) : []);
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No candidates have been accepted.</p>;
  }

  return (
    <>
      {savedCandidates.map((candidate) => (
        <div
          key={candidate.id}
          style={{
            borderBottom: "2px solid black",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <img
            style={{ height: "200px", width: "200px" }}
            src={candidate.avatar_url}
            alt={`${candidate.name}'s avatar`}
          />
          {/* <h2>{candidate.name}</h2> */}
          <h2>{candidate.login}</h2>
          <button style={{ marginBottom: "20px" }}>
            <a
              href={candidate.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </button>
          {/* <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <article>Bio: {candidate.bio}</article> */}
        </div>
      ))}
    </>
  );
};

export default SavedCandidates;
