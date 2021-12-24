import { useState } from "react";
import { LW, PWLWType } from "../../utils/constants";
const pwServicestableHeaderConsts = [
  "Household No",
  "Beneficiary Name",
  "Husband Name",
  "Services received",
  "Reason/Feeding Days",
  "weight During this month",
  "IFA consumed",
  "HB",
  "TT Dose No",
  "Muac",
  "Action",
];

function Services() {
  const [list, setList] = useState(LW);
  const [isfeedingReceived, setIsFeedingReceived] = useState("")

  const tableRequiredDataNames = [
    "SI_No_of_the_Family",
    "Member_Name",
    "Husband_Name",
    "FeedingReceived",
    "FeedingReason",
    "weight",
    "IFACosumedDays",
    // "IFACosumedDays_old",
    "HB",
    // "HB_old",
    // "weight_old",
    "TTDose",
    "Muac",
    "Action",
  ];

  //it will return data of PregnantWomen table row based on row name
const tablerowContent =(pregnant:PWLWType)=>{
    return(tableRequiredDataNames.map((header) =>{
        switch(header){
            case "FeedingReceived":
                return (<td>
                    <label >
                        <input type="radio" name="isfeedingReceived" value="yes" onChange={()=>setIsFeedingReceived("yes")}/>
                        Yes
                    </label>
                    <label >
                    <input type="radio" name="isfeedingReceived" value="no" onChange={()=>setIsFeedingReceived("no")}/>
                    No
                </label>
                    </td>)  
               
                
            case "FeedingReason":
                // if the Feeding received is yes return input else return dropdown 
                 if(isfeedingReceived === "yes"){
                    return (
                        <td>
                            <select>
                                <option value="Not In Village">Not In Village</option>
                                <option value="Not willing to take">Not willing to take</option>
                                <option value="permanently migrated">permanently migrated</option>
                                <option value="duplicate record">duplicate record</option>
                            </select>
                        </td>
                    )
                 }else{
                     return <td><input type="number" /></td>
                 
                 }
            case "weight":
                return <td><input placeholder="Weight" type="number" min={2} max={25}/></td>
            case "IFACosumedDays":
                return <td><input placeholder="IFA" type="number" min={2} max={25}/></td>
            case "HB":
                return <td><input placeholder="HB %" type="number" min={0} max={31}/></td>
            case "Muac":
                return <td><input placeholder="Muac" type="number" min={2} max={25}/></td>
            case "Action":
                return <td><button>Save</button>   </td>
            case "TTDose":
                return (
                    <td>
                        <select>
                            <option disabled value="select">select</option>
                            <option value="TT Dode 1">TT Dode 1</option>
                            <option value="TT Dode 2">TT Dode 2</option>
                            <option value="DEWORMING">DEWORMING</option>
                        </select>
                    </td>
                )
            default :
                    return <td>{pregnant[header]}</td>;
        }
    }
        // header === "Action" ? (
        //   <td>
        //     <button>edit</button>
        //   </td>
        // ) : (
        //   <td>{pregnant[header]}</td>
        // )
      )
    )
}
  const tableHeaders = pwServicestableHeaderConsts.map((columnHeader) => (
    <th>{columnHeader}</th>
  ));

  const tableRow = list.map((pregnant) => (
    <tr>
      {tablerowContent(pregnant)}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>{tableRow}</tbody>
    </table>
  );
}

export default Services;
