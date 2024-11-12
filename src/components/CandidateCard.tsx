import Candidate from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  candidate: Candidate;
  onReject: () => void;
  onAccept: () => void;
}

const CandidateCard = ({
  candidate,
  onReject,
  onAccept,
}: CandidateCardProps) => (
  <div style={{ textAlign: "center" }}>
    <img
      src={candidate.avatar_url}
      style={{ maxHeight: "300px", maxWidth: "300px" }}
      alt={`${candidate.name}'s avatar`}
    />
    {/* <h2>{candidate.name}</h2> */}
    <h1>{candidate.login}</h1>
    <button>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </button>
    <br />
    {/* <p>Location: {candidate.location}</p>
    <p>Email: {candidate.email}</p>
    <p>Company: {candidate.company}</p>
    <article>Bio: {candidate.bio}</article> */}
    <button onClick={onReject} style={{ margin: "10px" }}>
      -
    </button>
    <button onClick={onAccept} style={{ margin: "10px" }}>
      +
    </button>
    <br />
  </div>
);

export default CandidateCard;
