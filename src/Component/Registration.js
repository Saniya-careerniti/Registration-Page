import React from "react";
import logo from "../assets/logo.png";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
import "../assets/cssFiles/Registration.css";
function Registration() {
  return (
    <>
      <div className="registration-form">
        <div className="header-title">
         <h1>Registration Form</h1>
        </div>
        <section className="container">
          <div className="header">
            <img src={logo} style={{ width: 230, height: 120, marginBottom:"10px"}} />
            <p>CIN : U74999PN2022PTC212295</p>
            <p>
              Address : F14, 3RD FLOOR, SHRI KAPILA, MSEB ROAD, VISHRAMBAG,
              SANGLI
            </p>
            <Grid container spacing={2}>
              <Grid item xs={6} className="header-contact">
                CONTACT: +91 70303 00131/2/3
              </Grid>
              <Grid item xs={6} className="header-email">
                E-Mail: support@careerniti.in
              </Grid>
            </Grid>
          </div>
        </section>

        <hr />

        <section className="container">
          <Grid container spacing={2}>
            <Grid item xs={6} id="student-info-fields">
            <span className="reg">Reg. No:</span>1
            </Grid>

            <Grid item xs={6} id="student-info-fields">
            <span style={{float:"right"}}> Date: DD/MM/YYYY</span>
             
            </Grid>
          </Grid>
          <div className="student-info">* Student Information</div>
          <Grid container spacing={2}>
            <Grid item xs={6} id="student-info-fields">
              Full Name: <input type="text" className="input"></input>
            </Grid>
            <Grid item xs={6} id="student-info-fields">
              DOB:
              <input type="text" className="input"></input>
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
              <input type="text" className="input"></input>
            </Grid>
            <Grid item xs={6} id="student-info-fields">
              <span className="label">Parent Email:</span>
              <input type="text" className="input"></input>
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
              <input type="text" className="input"></input>
            </Grid>
            <Grid item xs={6} id="student-info-fields">
              School/Collage Name:
              <input type="text" className="input"></input>
            </Grid>
          </Grid>
        </section>
        <hr />
        <section className="container">
          <div className="student-info">* Services</div>
          Admission Process:
          <select  className="dropdown">
            <option>Maharashtra Medical Admission Process</option>
            <option>All India Medical Admission Process</option>
            <option>AACCC (All India Ayush) Admission Process</option>
            <option>Maharashtra Ayush Admission Process</option>
            <option>Maharashtra Veterinary Admission Process</option>
            <option>All India Veterinary Admission Process</option>
            <option>Karnataka Medical Admission Process</option>
            <option>Karnataka Ayush Admission Process</option>
            <option>Other States Medical Admission process</option>
            <option>Maharashtra Engineering Admission Process</option>
            <option>JOSAA Admission Process</option>
            <option>BITSAT Admission Process</option>
            <option>Other Private Institutes Admission Process</option>
          </select>
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
          <Grid container spacing={4}>
            <Grid item xs={4}>
           <span className="service-title">1.Career Guidance</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <span className="service-title">2.Career Counselling</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <span className="service-title">3.Entrance Guidance</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <span className="service-title">4.Entrance Counselling</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <span className="service-title">5.Admission Guidance</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <span className="service-title">6.Admission Counselling</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          Additional Process:
          <input type="text" className="additional"></input>
        </section>
        <hr />

        <section className="container">
        <div className="student-info">* Invoice</div>
   
          <div className="services">
            <Grid container spacing={5}>
              <Grid item xs={4}></Grid>
              <Grid item xs={2}>Date</Grid>
              <Grid item xs={1}>
                Cash
              </Grid>
              <Grid item xs={1}>
                Online
              </Grid>
              <Grid item xs={4}>
                Changes
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <input type="text" className="remark"></input>
            </Grid>
            <Grid item xs={2}><input type="text" className="input-date"></input></Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={4}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <input type="text" className="remark"></input>
            </Grid>
            <Grid item xs={2}><input type="text" className="input-date"></input></Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={4}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <input type="text" className="remark"></input>
            </Grid>
            <Grid item xs={2}><input type="text" className="input-date"></input></Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={4}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <input type="text" className="remark"></input>
            </Grid>
            <Grid item xs={2}><input type="text" className="input-date"></input></Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={4}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <input type="text" className="remark"></input>
            </Grid>
            <Grid item xs={2}><input type="text" className="input-date"></input></Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={4}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
            <input type="text" className="remark"></input>
            </Grid>
            <Grid item xs={2}><input type="text" className="input-date"></input></Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={4}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <div className="total">Total:<input type="text" className=""></input></div>
          <div>Additional Remarks:
          <input type="text" className="additional-remarks"></input></div>
          
        </section>
        <section  className="container" >
        Signature of the student and, if the student is a minor, a parent or guardian:
        <input type="text" className="signature"></input>
        </section>
       <section className="container">
       <div id="btns">
       <Button variant="contained" id="submit-btn">Submit</Button>
       <Button variant="contained" id="print-btn">Print</Button>
       </div>

       </section>
      </div>
    </>
  );
}

export default Registration;
