export default function ExperienceSections() {
  return (
    <div className="experience-container">
      <div className="date">
        <div className="start-date-container">
          <div className="start-date" contentEditable></div>
          <p className="date-range">-</p>
        </div>
        <div className="end-date" contentEditable></div>
      </div>
      <div className="experience-content">
        <div className="titlebox">
          <div className="experience-title" contentEditable></div>
          <button
            className="remove"
            type="button"
            onClick={(e) => e.target.parentNode.parentNode.parentNode.remove()}
          >
            x
          </button>
        </div>
        <div className="experience-location" contentEditable></div>
        <ul className="experience-responsibilities">
          <li className="job-responsibility" contentEditable></li>
          <li className="job-responsibility" contentEditable></li>
          <li className="job-responsibility" contentEditable></li>
          <li className="job-responsibility" contentEditable></li>
        </ul>
      </div>
    </div>
  );
}
