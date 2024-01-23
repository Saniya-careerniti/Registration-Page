import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import moment from 'moment';

function StudentInfo({ onDataUpdate }) {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    dob: '',
    stdContact: '',
    pcontact: '',
    stdEmail: '',
    pemail: '',
    gender: '',
    status: '',
    loc: '',
    colName: '',
  });

  const locationOptions = ["Satara", "Sangli", "Karad", "Kolhapur", "Pune", "Nashik", "Other"];

  const handleFieldChange = (fieldName, value) => {
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    // This effect will run whenever any field in studentInfo changes
    onDataUpdate(studentInfo);
  }, [studentInfo, onDataUpdate]);

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
              value={studentInfo.name}
              onChange={(e) => {
                handleFieldChange('name', e.target.value);
                onDataUpdate();
              }}
            />
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            DOB:
            <input
              type="date"
              className="input"
              value={studentInfo.dob}
              onChange={(e) => {
                handleFieldChange('dob', e.target.value);
                onDataUpdate();
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Student Contact:
            <input
              type="text"
              className="input"
              value={studentInfo.stdContact}
              onChange={(e) => {
                handleFieldChange('stdContact', e.target.value);
                onDataUpdate();
              }}
            />
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            Parent Contact:
            <input
              type="text"
              className="input"
              value={studentInfo.pcontact}
              onChange={(e) => {
                handleFieldChange('pcontact', e.target.value);
                onDataUpdate();
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} id="student-info-fields">
            Student Email:
            <input
              type="email"
              className="input"
              value={studentInfo.stdEmail}
              onChange={(e) => {
                handleFieldChange('stdEmail', e.target.value);
                onDataUpdate();
              }}
            />
          </Grid>
          <Grid item xs={6} id="student-info-fields">
            <span className="label">Parent Email:</span>
            <input
              type="email"
              className="input"
              value={studentInfo.pemail}
              onChange={(e) => {
                handleFieldChange('pemail', e.target.value);
                onDataUpdate();
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          
          <Grid item xs={6} id="student-info-fields">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              aria-placeholder="Gender"
              value={studentInfo.gender}
              onChange={(e) => {
                handleFieldChange('gender', e.target.value);
                onDataUpdate();
              }}
            >
              Gender:
              <span id="radio">
                <FormControlLabel control={<Radio />} label="Female" value="Female" />
                <FormControlLabel control={<Radio />} label="Male" value="Male" />
              </span>
            </RadioGroup>
          </Grid>

          <Grid item xs={6} id="student-info-fields">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              aria-placeholder="Status"
              value={studentInfo.status}
              onChange={(e) => {
                handleFieldChange('status', e.target.value);
                onDataUpdate();
              }}
            >
              Status:
              <span id="radio">
                <FormControlLabel value="fresher" control={<Radio />} label="Fresher" />
                <FormControlLabel value="repeater" control={<Radio />} label="Repeater" />
              </span>
            </RadioGroup>
          </Grid>

        </Grid>

        <Grid container spacing={2}>
        <Grid item xs={6} id="student-info-fields">
          Location:
          <select
            className="input"
            value={studentInfo.loc}
            onChange={(e) => {
              handleFieldChange('loc', e.target.value);
            }}
          >
            <option value="">Select Location</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </Grid>

        <Grid item xs={6} id="student-info-fields">
          College Name:
          <input
            type="text"
            className="input"
            value={studentInfo.colName}
            onChange={(e) => {
              handleFieldChange('colName', e.target.value);
            }}
          />
        </Grid>
      </Grid>

      </section>
    </>
  );
}

export default StudentInfo;
