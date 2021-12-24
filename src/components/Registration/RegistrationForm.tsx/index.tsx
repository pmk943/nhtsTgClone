import React from "react";
import useInput from "../../../customhooks/useInput";
import regValidation from "./RegistrationFormValidationRules";
import {  ref, set } from "firebase/database";
import { database } from "../../../firebase";



function RegistrationForm() {
  const { errorDetails, values, onInputChange, onFormSubmit } = useInput(
    sendingFormData,
    regValidation
  );
  // const {resetInput:resetSerialNoInput, value:serialNo, onChange:serialNoChange}=useInput()
  // const {resetInput:PWValueReset,...pregnantWomeninputProps }=useInput()
  // const {resetInput:PWHValueReset, ...husbandnameinputProps}=useInput()
  function sendingFormData() {
    //set(ref(database, 'pebbair/pebbair-3/children' ), PWS);
    
    console.log("form submitted", { values });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="household_No">
          Household No
          <input
            id="household_No"
            type="number"
            name="household_No"
            placeholder="Household No"
            value={values.household_No}
            onChange={onInputChange}
          />
        </label>
        {errorDetails?.household_No && <p>{errorDetails.household_No}</p>}
      </div>
      <div>
        <label htmlFor="SNoWithinFamily">
          Serial No within Family
          <input
            id="SNoWithinFamily"
            type="number"
            name="serial_no_family"
            placeholder="S.No within family"
            value={values.serial_no_family}
            onChange={onInputChange}
          />
        </label>
        {errorDetails?.serial_no_family && <p>{errorDetails.serial_no_family}</p>}
      </div>
      <div>
        <label htmlFor="Aadhar_id">
          Aadhar ID
          <input
            id="Aadhar_id"
            type="string"
            name="aadhar_id"
            placeholder="Aadhar ID"
            value={values.aadhar_id}
            onChange={onInputChange}
          />
        </label>
        {errorDetails?.aadhar_id && <p>{errorDetails.aadhar_id}</p>}
      </div>
      
      <div>
        Pregnant Name
        <label htmlFor="name">
          <input
            placeholder="name"
            type="text"
            value={values.name}
            name="name"
            onChange={onInputChange}
          />
        </label>
        {errorDetails?.name && <p>{errorDetails.name}</p>}
      </div>
      <div>
        <label htmlFor="husband_name">
          Husband name
          <input
            type="text"
            name="husband_name"
            value={values.husband_name}
            onChange={onInputChange}
            placeholder="husband Name"
            id="husband_name"
          />
        </label>
        {errorDetails?.husband_name && <p>{errorDetails.husband_name}</p>}
      </div>

      
      <button>submit</button>
    </form>
  );
}

export default RegistrationForm;
