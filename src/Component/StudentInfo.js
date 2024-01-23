import React, { useState } from "react";
import { Grid } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import moment from "moment";
function StudentInfo({onDataUpdate} ) {
  const [name, setName]=useState("");
  const [dob, setDob]=useState("");
  const [stdContact, setStdcontact]=useState("");
  const [pcontact, setPcontact]=useState("");
  const [stdEmail, setStdEmail]=useState("");
  const [pemail, setPemail]=useState("");
  const [gender, setGender] = useState("");
  const [status,setStatus]=useState("");
  const [loc,setLoc]=useState("");
  const [colName, setColName]=useState("");

  const location= ["Satara", "Sangli", "Karad", "Kolhapur", "Pune", "Nashik", "Other"]

  const handleFieldChange=(fieldname,value)=>{

    switch (fieldname) {
      case 'Full Name':
        setName(value);
        break;

      case 'DOB':
        setDob(value);
        break;

      case 'Student Contact':
        setStdcontact(value);
        break;

      case 'Parent Contact':
        setPcontact(value);
        break;

      case 'Student Email':
        setStdEmail(value);
        break;

      case 'Parent Email':
         setPemail(value);
         break;

      case 'Gender':
         setGender(value);
          break;

      case 'Status':
          setStatus(value);
          break; 
       
      case 'Location':
         setLoc(value);
         break;

      case 'School/Collage Name':
          setColName(value);
          break;   

      default:
        break;
    }
  }

  const handleDataUpdate = () => {
    onDataUpdate({name,dob,stdContact,pcontact,stdEmail,pemail,gender,loc,colName});
  };
 

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
            Full Name: 
            <input 
             type="text" 
             className="input" 
             value={name} 
             onChange={(e) => {
             handleFieldChange('Full Name', e.target.value);
             handleDataUpdate();}}
             >
             </input>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            DOB:
            <input 
             type="date" 
             className="input" 
             value={dob} 
             onChange={(e) => {
             handleFieldChange('DOB', e.target.value);
             handleDataUpdate();}}
             ></input>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Student Contact:
            
             <input 
              type="text"
              className="input"
              value={stdContact}
              onChange={(e)=>{
                handleFieldChange('Student Contact',e.target.value);
                handleDataUpdate();
              }}
              
              >

              </input>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            Parent Contact:
            <input 
             type="text" 
             className="input"
             value={pcontact}
             onChange={(e)=>{
              handleFieldChange('Parent Contact',e.target.value);
              handleDataUpdate();
             }}
             ></input>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Student Email:
            <input 
             type="email" 
             className="input"
             value={stdEmail}
             onChange={(e)=>{
              handleFieldChange('Student Email',e.target.value);
              handleDataUpdate();}}
             ></input>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            <span className="label">Parent Email:</span>
            <input 
             type="email" 
             className="input"
             value={pemail}
             onChange={(e)=>{
              handleFieldChange('Parent Email',e.target.value);
              handleDataUpdate();}}
             ></input>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
          <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              aria-placeholder="Gender"
              value={gender}
              onChange={(e) => {
                handleFieldChange('Gender', e.target.value);
                handleDataUpdate();
              }}
            >
              Gender:
              <span id="radio">
              <FormControlLabel
                control={<Radio />}
                label="Female"
                value="Female"
              />
              <FormControlLabel
                control={<Radio />}
                label="Male"
                value="Male"
              />
              </span>
            </RadioGroup>
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              aria-placeholder="Status"
              value={status}
              onChange={(e) => {
                handleFieldChange('Status', e.target.value);
                handleDataUpdate();
              }}
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
              onChange={(e)=>{
              handleFieldChange('Location',e.target.value);
              handleDataUpdate();}}
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
            <input type="text" 
             className="input"
             value={colName}
             onChange={(e)=>{
              handleFieldChange('School/Collage Name',e.target.value);
              handleDataUpdate();}}
             ></input>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default StudentInfo;
