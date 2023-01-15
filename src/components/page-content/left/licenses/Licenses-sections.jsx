export default function LicensesSections() {
  return (
    <div className="licenses-container">
      <div className="date"></div>
      <div className="licenses-content">
        <div className="titlebox">
          <div className="licenses-description" contentEditable></div>
          <button
            className="remove"
            type="button"
            onClick={(e) => e.target.parentNode.parentNode.remove()}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
