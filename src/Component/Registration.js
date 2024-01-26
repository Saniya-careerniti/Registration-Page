import React, {useState, useEffect} from "react";
import logo from "../assets/logo.png";
import Grid from "@mui/material/Grid";
import "../assets/cssFiles/Registration.css";
import StudentInfo from "./StudentInfo";
import Services from "./Services";
import Invoice from "./Invoice";
import Submit from "./Submit";

function Registration() {

  const [studentInfo, setStudentInfo] = useState(
    {
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
    }
  );

  // State for services information
  const [serviceInfo, setServiceInfo] = useState(
    {
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

  // State for invoice information
  const [invoiceInfo, setInvoiceInfo] = useState(
    {
      Feild: [
        {
          name: '',
          date: Date.now(),
          Cash: false,
          Online: false,
          Charges: 0
        }
      ],
      Total: 0,
      Additional_Remarks: ''
    }
  );

  // Function to handle changes in student information
  const handleStudentInfoChange = (fieldName, value) => {
    setStudentInfo({
      ...studentInfo,
      [fieldName]: value,
    });
  };

  // Function to handle changes in services information
  const handleServiceInfoChange = (fieldName, value) => {
    setServiceInfo({
      ...serviceInfo,
      [fieldName]: value,
    });
  };

  // Function to handle changes in invoice information
  const handleInvoiceInfoChange = (fieldName, value) => {
    setInvoiceInfo({
      ...invoiceInfo,
      [fieldName]: value,
    });
  };

  // Function to submit the form (you can implement your logic here)
  const handleSubmit = () => {
    // Send a POST request with the collected data
    // ...

    // Optionally, navigate to the next step/component
    // ...
  };

  // ALL ADDRESS AND LOCATION RELATED STUFF
  // current location 
  const locations = ["Sangli", "Satara", "Karad", "Kolhapur", "Pune", "Nashik", "Other"];
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  switch(location){
    case "Sangli":
      setAddress(()=>{
        return "Career Niti, 2nd Floor, Above SBI Bank, Near New Pride Multiplex, Sangli - Miraj Road, Sangli - 416416"
      })
      break;
    case "Satara":
      break;
    case "Karad":
      break;
    case "Kolhapur":
      break;
    case "Pune":
      break;
    case "Nashik":
      break;
    case "Other":
      break;
    default:
      break;
  }


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
              Address : {address}
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
        
        <StudentInfo 
          studentInfo={studentInfo} 
          handleStudentInfoChange={handleStudentInfoChange}
          locationList = {locations}
          location = {location}
          setLocation = {setLocation}
        />
        
        <hr/>

        {/* <Services/>  */}

        {/* <Submit/> */}

      </div>
    </>
  );
}

export default Registration;
