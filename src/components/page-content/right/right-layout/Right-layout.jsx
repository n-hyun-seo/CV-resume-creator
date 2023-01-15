import Title from "../../Title";
import PersonalSections from "../personal-info/Personal-info-sections";
import SkillsSections from "../skills/Skills-sections";
import { useState } from "react";

export default function Right() {
  let [arrSki, setArrSki] = useState([0]);
  let [arrLan, setArrLan] = useState([0]);
  return (
    <div className="right">
      <div className="right-content">
        <Title title="Personal Info" />
        <PersonalSections id="Address" ph="Street" />
        <PersonalSections id="Phone" ph="xxx-xxx-xxxx" />
        <PersonalSections id="Email" ph="example@example.com" />
        <PersonalSections id="WWW" ph="www.example.com" />
        <PersonalSections id="LinkedIn" ph="www.linkedin.com/example" />
        <Title title="Skills" setArr={setArrSki} arr={arrSki} />
        {arrSki.map((x) => {
          return <SkillsSections />;
        })}
        <Title title="Languages" setArr={setArrLan} arr={arrLan} />
        {arrLan.map((x) => {
          return <SkillsSections />;
        })}
      </div>
    </div>
  );
}
