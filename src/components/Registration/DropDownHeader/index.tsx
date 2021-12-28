import { useState } from "react";
import { REGISTRATION_DROPDOWN_OPTIONS } from "../../../utils/constants";
const projectName: string = REGISTRATION_DROPDOWN_OPTIONS.projectName;
function DropDownHeader() {
  const [sector, setSector] = useState(["select sector"]);
  const [awcs, setAwc] = useState([]);
  const [selectedAwc, setSelecetdAwc] = useState("select awc");

  const onSectorChange = (e: any) => {
    const selectedSector: string = e.target.value;
    setAwc(REGISTRATION_DROPDOWN_OPTIONS.awcs[selectedSector]);
    setSelecetdAwc("select awc");
  };
  const onAwcChange = (e: any) => {
    setSelecetdAwc(e.target.value);
  };
  return (
    <form>
      <label htmlFor="projectName">
        Project Name
        <select id="projectName">
          <option>{projectName}</option>
        </select>
      </label>
      <label>
        Select Sector
        <select onChange={(e: any) => onSectorChange(e)}>
          {REGISTRATION_DROPDOWN_OPTIONS.sectors.map(
            (sector: string, idx: number) =>
              idx === 0 ? (
                <option key={sector} disabled selected>
                  {sector}
                </option>
              ) : (
                <option key={sector}>{sector}</option>
              )
          )}
        </select>
      </label>
      <label>
        Select AWC
        <select onChange={onAwcChange} value={selectedAwc}>
          {awcs.map((sector: any) => (
            <option key={sector}>{sector}</option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default DropDownHeader;
