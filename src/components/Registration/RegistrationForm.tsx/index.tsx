import React, { useState } from "react";
import useInput from "../../../customhooks/useInput";
import regValidation from "./RegistrationFormValidationRules";
import { ref, set } from "firebase/database";
import { database } from "../../../firebase";

function RegistrationForm() {
  const { errorDetails, values, onInputChange, onFormSubmit, onResetSubmit } = useInput(
    sendingFormData,
    regValidation
  );
  const [ageCalender, setaAgeCalender] = useState<boolean>(false);
  const [ageEnter, setAgeEnter] = useState<boolean>(false);
  const [category, setCategory] = useState<boolean>(false);
  const [perTemp, setPerTemp] = useState<boolean>(false);
  // const {resetInput:resetSerialNoInput, value:serialNo, onChange:serialNoChange}=useInput()
  // const {resetInput:PWValueReset,...pregnantWomeninputProps }=useInput()
  // const {resetInput:PWHValueReset, ...husbandnameinputProps}=useInput()
  function sendingFormData() {
    //set(ref(database, 'pebbair/pebbair-3/children' ), PWS);

    console.log("form submitted", { values });
  }

  const ageInputCalendar = () => {
    setaAgeCalender(true);
    setAgeEnter(false);
  };
  const ageInputText = () => {
    setAgeEnter(true);
    setaAgeCalender(false);
  };

  return (
    <div>
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
          {errorDetails?.serial_no_family && (
            <p>{errorDetails.serial_no_family}</p>
          )}
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
        <div>
          <label htmlFor="mobile_number">
            Mobile Number
            <input
              type="tel"
              name="mobile_number"
              value={values.mobile_number}
              onChange={onInputChange}
              placeholder="Mobile Number"
              id="mobile_number"
            />
          </label>
          {errorDetails?.mobile_number && <p>{errorDetails.mobile_number}</p>}
        </div>
        <div>
          <label htmlFor="age_selction">
            Date of Birth/Age
            <input
              type="radio"
              name="age_selection"
              id="age_calender"
              onChange={ageInputCalendar}
            />
            <label htmlFor="age_calender">Date</label>
            <input
              type="radio"
              name="age_selection"
              id="age_enter"
              onChange={ageInputText}
            />
            <label htmlFor="age_enter">Age</label>
          </label>
         {/* && !ageEnter  */}
          {ageCalender && (
            <input
              type="date"
              name="calendar_entry"
              value={values.calendar_entry}
              onChange={onInputChange}
            />
          )}
          {/* && !ageCalender */}
          {ageEnter  && (
            <input
              type="number"
              name="age_text_entry"
              value={values.age_text_entry}
              onChange={onInputChange}
            />
          )}
          {errorDetails?.age_text_entry && <p>{errorDetails.age_text_entry}</p>}
        </div>
        <div>
          <label htmlFor="caste_category">
            Category
            <input
              type="radio"
              name="caste_selection"
              id="ST_selection"
              onChange={() => setCategory(true)}
              value={values.caste_category}
            />
            <label htmlFor="ST_selection">ST</label>
            <input
              type="radio"
              name="caste_selection"
              id="SC_selection"
              onChange={() => setCategory(true)}
              value={values.caste_category}
            />
            <label htmlFor="SC_selection">SC</label>
            <input
              type="radio"
              name="caste_selection"
              id="BC_selection"
              onChange={() => setCategory(true)}
              value={values.caste_category}
            />
            <label htmlFor="BC_selection">BC</label>
            <input
              type="radio"
              name="caste_selection"
              id="OC_selection"
              onChange={() => setCategory(true)}
              value={values.caste_category}
            />
            <label htmlFor="OC_selection">OC</label>
          </label>
          {!category && errorDetails?.caste_category && (
            <p>{errorDetails.caste_category}</p>
          )}
        </div>
        <div>
          <label htmlFor="Registration_date">
            Registration Date at AWC
            <input
              type="date"
              id="Registration_date"
              name="Registration_date"
              value={values.Registration_date}
              onChange={onInputChange}
            />
          </label>
          {errorDetails?.Registration_date && (
            <p>{errorDetails.Registration_date}</p>
          )}
        </div>
        <div>
          <label htmlFor="LMP">
            LMP
            <input type="date" id="LMP" name="LMP" value={values.LMP} onChange={onInputChange} />
          </label>
          {errorDetails?.LMP && <p>{errorDetails.LMP}</p>}
        </div>
        <div>
          <label htmlFor="permanent_temparory">
            Category
            <input
              type="radio"
              name="permanent_temparory"
              id="permanent"
              onChange={() => setPerTemp(true)}
              value={values.permanent_temparory}
            />
            <label htmlFor="permanent">Permanent</label>
            <input
              type="radio"
              name="permanent_temparory"
              id="temparory"
              onChange={() => setPerTemp(true)}
              value={values.permanent_temparory}
            />
            <label htmlFor="temparory">Temparory</label>
          </label>
          {!perTemp && errorDetails?.permanent_temparory && (
            <p>{errorDetails.permanent_temparory}</p>
          )}
        </div>
        <div>
          <label htmlFor="height">
            Height(in CMs)
            <input
              id="height"
              type="number"
              name="height"
              placeholder="Height"
              value={values.height}
              onChange={onInputChange}
            />
          </label>
          {errorDetails?.height && <p>{errorDetails.height}</p>}
        </div>
        <div>
          <label htmlFor="weight">
            Weight at The Time of Registration(in KGs)
            <input
              id="weight"
              type="number"
              name="weight"
              placeholder="Weight"
              value={values.weight}
              onChange={onInputChange}
            />
          </label>
          {errorDetails?.weight && <p>{errorDetails.weight}</p>}
        </div>
        <button>submit to save</button>
      </form>
      <button onClick={onResetSubmit}>Reset</button>
    </div>
  );
}

export default RegistrationForm;
