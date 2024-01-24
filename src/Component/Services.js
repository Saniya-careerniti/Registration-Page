import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Grid } from "@mui/material";
import Invoice from "./Invoice";
import GuidanceCounselling from "./GuidanceCounselling";

function Services({ onDataUpdate }) {
  const [initialServiceInfo, setInitialServiceInfo] = useState({

       Admission_Process:[],
       Opted:{
         Career_Guidace:{
          Opt:false,
          Dilevered:false,
          remark:""
         },
         Career_Counselling:{
          Opt:false,
          Dilevered:false,
          remark:""
         },
         Entrance_Guidace:{
          Opt:false,
          Dilevered:false,
          remark:""
         },
         Entrance_Counselling:{
          Opt:false,
          Dilevered:false,
          remark:""
         },
         Admission_Guidace:{
          Opt:false,
          Dilevered:false,
          remark:""
         },
         Admission_Counselling:{
          Opt:false,
          Dilevered:false,
          remark:""
         },
       },

       Additional_Process:"",
   
  });

  const ServiceNames=[
    "Career Guidance",
    "Career Counselling",
    "Entrance Guidance",
    "Entrance Counselling",
    "Admission Guidance",
    " Counselling",
  ]
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


  const handleFieldChange = (fieldName, value) => {
    setInitialServiceInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };

  
  

  useEffect(() => {
    // This effect will run whenever any field in studentInfo changes
    onDataUpdate(initialServiceInfo);
  }, [initialServiceInfo]);

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
            value={initialServiceInfo.Admission_Process}
            onChange={(e) => {
             handleFieldChange("Admission_Process", e.target.value);
            }}
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

        {
          ServiceNames.map((name,index)=>(
             <GuidanceCounselling id={index+1} title={name} service_Info={initialServiceInfo} handleFieldChange={handleFieldChange}/>
          ))
        }
      
   
        Additional Process:
        <input type="text" className="additional"></input>
      </section>
      <hr />
      <Invoice service={initialServiceInfo.Admission_Process} />
    </>
  );
}

export default Services;
