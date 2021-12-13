import { useState } from "react"
import { REGISTRATION_DROPDOWN_OPTIONS } from "../../../utils/constants"
const projectName:string = REGISTRATION_DROPDOWN_OPTIONS.projectName
function DropDownHeader() {
    const [sector, setSector]= useState(["select sector"])
    const [awc, setAwc]= useState(["select awc"])

    const onSectorChange = (e : any) =>{
        const selectedSector = e.target.value;
        

    }
    return (
        <form >
            <label htmlFor="projectName">
                Project Name
                <select id="projectName">
                    <option>{projectName}</option>
                </select>
            </label>
            <label >
                Select Sector
                <select onChange={e=>onSectorChange(e)}>
                    
                    {REGISTRATION_DROPDOWN_OPTIONS.sectors.map((sector,idx) =>(idx===0 ?<option disabled selected >{sector}</option>:<option>{sector}</option>))}
                </select>
            </label>
            <label >
               Select AWC 
               <select >
               {REGISTRATION_DROPDOWN_OPTIONS.sectors.map((sector,idx) =>(idx===0 ?<option disabled selected >{sector}</option>:<option>{sector}</option>))}

               </select>
            </label>
        </form>
    )
}

export default DropDownHeader
