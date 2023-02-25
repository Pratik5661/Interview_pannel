import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerF = (selected = new Date(), handleChange) => {
  return (
    <DatePicker onChange={handleChange} />
  );
};

export default DatePickerF