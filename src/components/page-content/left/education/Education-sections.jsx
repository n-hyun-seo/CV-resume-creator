export default function EducationSections() {
  return (
    <div className="education-container">
      <div className="date">
        <div className="start-date-container">
          <div className="start-date" contentEditable></div>
          <p className="date-range">-</p>
        </div>
        <div className="end-date" contentEditable></div>
      </div>
      <div className="education-content">
        <div className="titlebox">
          <div className="education-title" contentEditable></div>
          <button
            className="remove"
            type="button"
            onClick={(e) => e.target.parentNode.parentNode.parentNode.remove()}
          >
            x
          </button>
        </div>
        <div className="education-description" contentEditable></div>
      </div>
    </div>
  );
}
