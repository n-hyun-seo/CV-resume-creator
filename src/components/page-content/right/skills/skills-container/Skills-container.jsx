import Circles from "./Rating-circles";

export default function SkillsContainer(props) {
  return (
    <div className="skills-container">
      <div className="rating-container">
        <Circles title={props.title} />
        <div className="rating-description">Choose</div>
      </div>
    </div>
  );
}
