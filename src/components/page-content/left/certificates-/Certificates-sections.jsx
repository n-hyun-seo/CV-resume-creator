export default function CertificatesSections() {
  return (
    <div className="certificates-container">
      <div className="date"></div>
      <div className="certificates-content">
        <div className="titlebox">
        <div className="certificates-description" contentEditable></div>
        <button className="remove" type="button"  onClick={(e) => e.target.parentNode.parentNode.remove()}>x</button>
        </div>
      </div>
     
    </div>
  );
}
