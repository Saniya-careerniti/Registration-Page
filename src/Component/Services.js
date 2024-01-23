import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import Invoice from "./Invoice";

const initialServiceInfo = {
  Admission_Process: [],
  Opted: {
    Career_Guidance: { Opt: false, Delivered: false, Remark: "" },
    Career_Counselling: { Opt: false, Delivered: false, Remark: "" },
    Entrance_Guidance: { Opt: false, Delivered: false, Remark: "" },
    Entrance_Counselling: { Opt: false, Delivered: false, Remark: "" },
    Admission_Guidance: { Opt: false, Delivered: false, Remark: "" },
    Admission_Counselling: { Opt: false, Delivered: false, Remark: "" },
  },
  Additional_Process: "",
};

function Services() {
  const [selectedService, setSelectedService] = useState([]);
  const [serviceInfo, setServiceInfo] = useState(initialServiceInfo);

  const services = [
    "Maharashtra Medical Admission Process",
    "All India Medical Admission Process",
    "AACCC (All India Ayush) Admission Process",
    "Maharashtra Ayush Admission Process",
    "Maharashtra Veterinary Admission Process",
    "All India Veterinary Admission Process",
    "Karnataka Medical Admission Process",
    "Karnataka Ayush Admission Process",
    "Other States Medical Admission process",
    "Maharashtra Engineering Admission Process",
    "JOSAA Admission Process",
    "BITSAT Admission Process",
    "Other Private Institutes Admission Process",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedService(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    setServiceInfo((prevServiceInfo) => ({
      ...prevServiceInfo,
      Admission_Process: selectedService,
    }));
    console.log(serviceInfo)
  }, [selectedService]);

  const handleCheckboxChange = (category, property, checked) => {
    setServiceInfo((prevServiceInfo) => ({
      ...prevServiceInfo,
      Opted: {
        ...prevServiceInfo.Opted,
        [category]: {
          ...prevServiceInfo.Opted[category],
          [property]: checked,
        },
      },
    }));
  };

  const handleInputChange = (property, value) => {
    setServiceInfo((prevServiceInfo) => ({
      ...prevServiceInfo,
      Additional_Process: value,
    }));
  };

  return (
    <>
      <section className="container">
        <div className="student-info">* Services</div>
        <div className="multi-select">
          <span className="Admission-pro"> Admission Process:</span>
          <Select
            className="dropdown"
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedService}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {services.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="services">
          <Grid container spacing={4}>
            <Grid item xs={4}></Grid>
            <Grid item xs={1}>
              Opt
            </Grid>
            <Grid item xs={1}>
              Delivered
            </Grid>
            <Grid item xs={6}>
              Remark
            </Grid>
          </Grid>
        </div>

        {Object.entries(serviceInfo.Opted).map(([category, details], index) => (
          <Grid container spacing={4} key={index}>
            <Grid item xs={4}>
              <span className="service-title">{index + 1}.{category}</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox
                checked={details.Opt}
                onChange={(e) => handleCheckboxChange(category, "Opt", e.target.checked)}
              />
            </Grid>
            <Grid item xs={1}>
              <Checkbox
                checked={details.Delivered}
                onChange={(e) => handleCheckboxChange(category, "Delivered", e.target.checked)}
              />
            </Grid>
            <Grid item xs={6}>
              <input
                type="text"
                className="remark"
                value={details.Remark}
                onChange={(e) => handleCheckboxChange(category, "Remark", e.target.value)}
              ></input>
            </Grid>
          </Grid>
        ))}

        <div>
          Additional Process:
          <input
            type="text"
            className="additional"
            value={serviceInfo.Additional_Process}
            onChange={(e) => handleInputChange("Additional_Process", e.target.value)}
          ></input>
        </div>
      </section>

      <hr />
      <Invoice service={serviceInfo.Admission_Process} />
    </>
  );
}

export default Services;
