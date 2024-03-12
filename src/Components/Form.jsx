import React, { useCallback, useEffect, useState } from "react";
import InputFeild from "./InputFeild";
import { FormControl } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { inputFeildVlaue } from "../store/FeildValueSlice";

export default function Form() {
  const [convertedData, setConvertedData] = useState(1);
  const currentFormData = useSelector(({ inputFeildVlaue }) => inputFeildVlaue);
  const [value, setValue] = useState(1);

  //update the latest currency amount value
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  //handle and display the latest value
  function handleClick() {
    setConvertedData(
      JSON.parse(localStorage.getItem("conversion_rates"))[currentFormData.to]
    );
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <div>
            <InputFeild Placeholder="From" name="from" />
          </div>

          <div>
            <InputFeild Placeholder="To" name="to" />
          </div>
        </div>
        <div className="input-group">
          <p>
            <label>Amount</label>
            <input
              required
              type="number"
              name="initialInvest"
              onChange={changeHandler}
              value={value}
            />
          </p>
          <p>
            <label>converted value</label>
            <input
              type="number"
              required
              name="annualInvest"
              readOnly
              value={(value * convertedData).toFixed(4)}
            />
          </p>
        </div>
        <button onClick={handleClick}>Convert</button>
      </section>
    </>
  );
}
