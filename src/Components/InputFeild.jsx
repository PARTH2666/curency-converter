import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputFeildVlaue } from "../store/FeildValueSlice";
import { nanoid } from "@reduxjs/toolkit";
import { arr } from "../data/data";

let style = {
  width: "200px",
  border: "1px solid #76c0ae",
  borderradius: "0.25rem",
  backgroundcolor: "transparent",
  color: "#c2e9e0",
  fontsize: "1rem",
};

export default function InputFeild({ Placeholder, name }) {
  const currentFormData = useSelector(({ inputFeildVlaue }) => inputFeildVlaue);
  const dispatch = useDispatch();

  //trigger the dispatch on "from"  feild change
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(inputFeildVlaue({ name, value }));
  };

  //handle the call of api
  useEffect(() => {
    const url = `https://v6.exchangerate-api.com/v6/ce0e449791c65df7ae789694/latest/${currentFormData.from}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ce0e449791c65df7ae789694 ",
        "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) =>
        localStorage.setItem(
          "conversion_rates",
          JSON.stringify(data.conversion_rates)
        )
      );
  }, [currentFormData.from]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">{Placeholder}</InputLabel>
        <Select
          style={style}
          labelId="demo-select-small-label"
          id="demo-select-small"
          label="Age"
          name={name}
          onChange={handleChange}
        >
       {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {arr.map((item) => (
            <MenuItem value={item} key={nanoid()}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
