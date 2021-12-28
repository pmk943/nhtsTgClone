import React, { ChangeEventHandler, useState } from "react";

function useInput(sendingFormData: Function, regValidation: Function) {
  type valuesObjType = {
    name?: string;
    husband_name?: string;
    household_No?: number;
    serial_no_family?: number;
    aadhar_id?: number;
    mobile_number?: number;
    calendar_entry?: string;
    age_text_entry?: number;
    caste_category?: string;
    Registration_date?: string;
    LMP?: string;
    permanent_temparory?: string;
    height?: number;
    weight?: number;
  };

  const [values, setValue] = useState<valuesObjType>({});
  const [errorDetails, setErrorDetails] = useState<valuesObjType>({});

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = regValidation(values);
    setErrorDetails(errors);
    if (Object.keys(errors).length === 0) {
      console.log("inside form data");
      sendingFormData();
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const onResetSubmit = () => {
    setValue((values) => ({
      ...values,
      household_No: 0,
    }));
    console.log(values);
  };

  return { errorDetails, values, onInputChange, onFormSubmit, onResetSubmit };
}

export default useInput;
