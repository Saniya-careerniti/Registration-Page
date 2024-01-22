import React, { useState } from "react";
import { Grid } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import moment from "moment";
function StudentInfo() {

  const location= ["Satara", "Sangli", "Karad", "Kolhapur", "Pune", "Nashik", "Other"]
  const [loc,setLoc]=useState("");
  const handleChange=(e)=>{
      setLoc(e.target.value)
  }
  return (
    <>
      <section className="container">
        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            <div className="reg">Reg. No:1</div>
          </Grid>

          <Grid item xs={6} id="student-info-fields">
            <span style={{ float: "right" }}> Date: {moment().format('DD-MM-YYYY')}  </span>
          </Grid>
        </Grid>
        <div className="student-info">* Student Information</div>
        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Full Name: <input type="text" className="input"></input>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            DOB:
            <input type="date" className="input"></input>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Student Contact:
            <input type="text" className="input"></input>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            Parent Contact:
            <input type="text" className="input"></input>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Student Email:
            <input type="email" className="input"></input>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            <span className="label">Parent Email:</span>
            <input type="email" className="input"></input>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              aria-placeholder="Gender"
            >
              {" "}
              Gender:
              <span id="radio">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </span>
            </RadioGroup>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              aria-placeholder="Gender"
            >
              {" "}
              Status:
              <span id="radio">
                <FormControlLabel
                  value="fresher"
                  control={<Radio />}
                  label="Fresher"
                />
                <FormControlLabel
                  value="repeater"
                  control={<Radio />}
                  label="Repeater"
                />
              </span>
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Location:
            <select
              className="input"
              value={loc}
              label="location"
              onChange={handleChange}
            >
        {
          location.map((loc)=>(
            <option>{loc}</option>
          ))
        }
          
        </select>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            School/Collage Name:
            <input type="text" className="input"></input>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default StudentInfo;
