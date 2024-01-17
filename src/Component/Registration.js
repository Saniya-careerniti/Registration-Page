import React from "react";
import logo from "../assets/logo.png";
import Grid from "@mui/material/Grid";
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
            <img src={logo} style={{ width: 230, height: 120 }} />
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
          <div className="student-info">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Reg. No: 1
              </Grid>
              <Grid item xs={6}>
                Date:****
              </Grid>
            </Grid>
            <div>Student Information</div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Full Name: <input type="text"></input>
              </Grid>
              <Grid item xs={6}>
                DOB: <input type="text"></input>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                Student Contact:
                <input type="text"></input>
              </Grid>
              <Grid item xs={6}>
                Parent Contact:
                <input type="text"></input>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}

export default Registration;
