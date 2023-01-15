export default function ConferencesSections() {
    return (
      <div className="conferences-container">
        <div className="date">
          <div className="start-date-container">
            <div className="start-date" contentEditable></div>
          </div>
        </div>
        <div className="conferences-content">
          <div className="titlebox">
          <div className="conferences-description" contentEditable></div>
          <button className="remove" type="button"  onClick={(e) => e.target.parentNode.parentNode.parentNode.remove()}>x</button>
          </div>
        </div>
       
      </div>
    );
  }
  