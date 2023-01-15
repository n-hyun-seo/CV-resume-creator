import Title from "../../Title.jsx";
import ExperienceSections from "../experience/Experience-sections.jsx";
import EducationSections from "../education/Education-sections.jsx";
import CertificatesSections from "../certificates-/Certificates-sections.jsx";
import ConferencesSections from "../conferences/Conferences-sections.jsx";
import LicensesSections from "../licenses/Licenses-sections.jsx";
import { useState } from "react";

export default function Left() {
  let [arrExp, setArrExp] = useState([0]);
  let [arrEdu, setArrEdu] = useState([0]);
  let [arrCer, setArrCer] = useState([0]);
  let [arrCon, setArrCon] = useState([0]);
  let [arrLic, setArrLic] = useState([0]);

  return (
    <div className="left">
      <div className="left-content">
        <div className="description">
          <div className="description-input" contentEditable></div>
        </div>
        <Title title="Experience" setArr={setArrExp} arr={arrExp} />
        {arrExp.map((x) => {
          return <ExperienceSections />;
        })}
        <Title title="Education" setArr={setArrEdu} arr={arrEdu} />
        {arrEdu.map((x) => {
          return <EducationSections />;
        })}
        <Title title="Certificates" setArr={setArrCer} arr={arrCer} />
        {arrCer.map((x) => {
          return <CertificatesSections />;
        })}
        <Title title="Conferences" setArr={setArrCon} arr={arrCon} />
        {arrCon.map((x) => {
          return <ConferencesSections />;
        })}
        <Title title="Licenses" setArr={setArrLic} arr={arrLic} />
        {arrLic.map((x) => {
          return <LicensesSections />;
        })}
      </div>
    </div>
  );
}
