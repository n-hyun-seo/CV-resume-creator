import SkillsContainer from "./skills-container/Skills-container";
import { useState } from "react";

export default function SkillsSections() {
  const [title, setTitle] = useState("");
  return (
    <div className="container">
      <div className="titlebox">
        <input
          className="skill-name"
          placeholder="Enter here."
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="remove2"
          type="button"
          onClick={(e) => e.target.parentNode.parentNode.remove()}
        >
          x
        </button>
      </div>
      <SkillsContainer title={title} />
    </div>
  );
}
