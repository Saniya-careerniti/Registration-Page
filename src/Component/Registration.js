import React from "react";
import logo from "../assets/logo.png";
import Grid from "@mui/material/Grid";
import "../assets/cssFiles/Registration.css";
import StudentInfo from "./StudentInfo";
import Services from "./Services";
import Submit from "./Submit";
import Invoice from "./Invoice";

function Registration() {

  return (
    <>
      <div className="registration-form">
        <div className="header-title">
          <h1>Registration Form</h1>
        </div>
        <section className="container">
          <div className="header">
            <img
              src={logo}
              style={{ width: 230, height: 120, marginBottom: "10px" }}
            />
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
        <hr/>
        {/* <StudentInfo/>
        <hr/>
        <Services/> */}

        <Submit/>
       

        
      </div>
    </>
  );
}

export default Registration;
