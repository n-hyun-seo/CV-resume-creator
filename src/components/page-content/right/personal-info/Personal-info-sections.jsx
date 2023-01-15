export default function PersonalSections(props) {
  return (
    <div className="personal-info-section">
      <div className="personal-info-title">
        {props.id}
      </div>
      <input className="personal-info-info" placeholder={props.ph} id={props.id}>
      </input>
      {props.id === "Address" && <input className="personal-info-info" placeholder="Country, State, ZIP"></input> }
    </div>
  );
}
