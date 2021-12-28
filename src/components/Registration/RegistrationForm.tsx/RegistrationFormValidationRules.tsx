import React from "react";
type valuesObjType = {
  name?: string;
  husband_name?: string;
  household_No?:number;
  serial_no_family?:number;
  aadhar_id?:number;
  mobile_number?:number;
  calendar_entry?:string;
  age_text_entry?:number;
  caste_category?:string;
  Registration_date?:string;
  LMP?:string;
  permanent_temparory?:string;
  height?:number
  weight?:number
};
type errorObjType = {
  name?: string;
  husband_name?: string;
  household_No?:string;
  serial_no_family?:string;
  aadhar_id?:string;
  mobile_number?:string;
  calendar_entry?:string;
  age_text_entry?:string;
  caste_category?:string;
  Registration_date?:string;
  LMP?:string;
  permanent_temparory?:string;
  height?:string;
  weight?:string;
};
function regValidation(values:valuesObjType) {
  let errors: errorObjType = {};
  if (!values.name) {
    errors.name = "name is required";
  } else if (values.name.length < 2) {
    errors.name = "name should be atleast two characters";
  }
  if (!values.husband_name) {
    errors.husband_name = "husband is required";
  } else if (values.husband_name.length < 2) {
    errors.husband_name = "husband name should be atleast two characters";
  }
  if (!values.household_No) {
    errors.household_No = "House No is required";
  } else if (values.household_No <= 0 ) {
    errors.household_No = "value should not be zero or negative";
  }
  if (!values.serial_no_family) {
    errors.serial_no_family = "Serial No is required";
  } else if (values.serial_no_family <= 0 ) {
    errors.serial_no_family = "Serial should not be negative or zero ";
  }
  if (!values.aadhar_id) {
    errors.aadhar_id = "Aadhar is required";
  } else if (values.aadhar_id.toString().length < 12) {
    errors.aadhar_id = "Aadhar name should be atleast twelve characters";
  }
 if(!values.mobile_number) {
   errors.mobile_number="Mobile Number is required"
 }
 if(!values.calendar_entry && !values.age_text_entry)
 {
   errors.age_text_entry = "Please Enter Date/Age"
 }
 if(!values.caste_category) {
   errors.caste_category = "Please select the Category"
 }
 if(!values.Registration_date) {
   errors.Registration_date = "Please enter Registration Date at AWC"
 }
 if(!values.permanent_temparory) {
   errors.permanent_temparory = "Please select Permanent/Temporary"
 }
 if(!values.height) {
   errors.height = "Please enerHeight (cms)"
 }
 if(!values.weight) {
   errors.weight = "Please ener Weight (kgs)"
 }
 if(!values.LMP) {
   errors.LMP = "Please enter LMP"
 }
  return errors;
}

export default regValidation;
