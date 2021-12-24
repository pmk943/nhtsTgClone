import "./BeneficiaryList.css";
import { PWS } from "../../utils/constants";
import React, { useState } from "react";
import BeneficiaryListFilterHead from "./BeneficiaryListFilterHead";

function BeneficiaryList() {
  const [list, setList] = useState(PWS);
  const tableHeaderConts = [
    "Beneficiary ID",
    "Pregnant Women Name",
    "AADHAR",
    "Husband Name",
    "Mobile Number",
    "LMP",
    "EDD",
    "Action",
  ];
  const tableRequiredDataNames = [
    "UID",
    "Member_Name",
    "Aadhar_Card",
    "Husband_Name",
    "Contact_Number",
    "LMP_date",
    "EDD_date",
    "Action",
  ];

  const onBeneficiaryIDChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newlist = PWS.filter(({ UID }) =>
      UID.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setList(newlist);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newlist = PWS.filter(({ Member_Name }) =>
      Member_Name.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setList(newlist);
  };
  const onAadharChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newlist = PWS.filter(({ Aadhar_Card }) =>
      Aadhar_Card.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setList(newlist);
  };
  const tableHeaders = tableHeaderConts.map((columnHeader) => (
    <th>{columnHeader}</th>
  ));
  const tableRow = list.map((pregnant) => (
    <tr>
      {tableRequiredDataNames.map((header) =>
        header === "Action" ? (
          <td>
            <button>edit</button>
          </td>
        ) : (
          <td>{pregnant[header]}</td>
        )
      )}
    </tr>
  ));
  return (
    <div>
      <BeneficiaryListFilterHead
        onBeneficiaryIDChange={onBeneficiaryIDChange}
        onNameChange={onNameChange}
        onAadharChange={onAadharChange}
      />
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  );
}

export default BeneficiaryList;
