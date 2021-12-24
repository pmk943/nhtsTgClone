import React from "react";
type valuesObjType = {
  name?: string;
  husband_name?: string;
  household_No?:number;
  serial_no_family?:number;
  aadhar_id?:number;
};
type errorObjType = {
  name?: string;
  husband_name?: string;
  household_No?:string;
  serial_no_family?:string;
  aadhar_id?:string;
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
 
  return errors;
}

export default regValidation;
