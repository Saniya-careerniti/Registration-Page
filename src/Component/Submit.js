import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import StudentInfo from "./StudentInfo";
import Services from "./Services";
import Invoice from "./Invoice";


function Submit() {
  
  // 1st feild
  const currentDate = new Date().toLocaleDateString();
  
  // 2nd feild
  const currentAppCount = 1;  // TODO: get this from the database

  // 3rd feild -> StudentInfo

  // 4th feild -> Services
  const [serviceInfo, setServiceInfo] = useState({
    Admission_Process: [],
    Opted : {
      Career_Guidance: {
        Opt : false,
        Delivered : false,
        Remark : ""
      },

      Career_Counselling: {
        Opt : false,
        Delivered : false,
        Remark : ""
      },

      Entrance_Guidance: {
        Opt : false,
        Delivered : false,
        Remark : ""
      },

      Entrance_Counselling: {
        Opt : false,
        Delivered : false,
        Remark : ""
      },

      Admission_Guidance: {
        Opt : false,
        Delivered : false,
        Remark : ""
      },

      Admission_Counselling: {
        Opt : false,
        Delivered : false,
        Remark : ""
      }, 
    },

    Additional_Process: ""
  });

  const [formData, setFormData] = useState(
    
    {
      "RegNo": currentAppCount,
     
      // today's date
      "Dte": currentDate,

      "Stud_info": {StudentInfo},
     
      "Services": {serviceInfo},

      "Invoice": {
        "Feild": [
          {
            "name": String,
            "date": {
              "$dateToString": { "format": "%d/%m/%Y", "date": "$$NOW" }
            },
            "Cash": Boolean,
            "Online": Boolean,
            "Charges": Number
          }
          /* ... More fields as needed ... */
        ],
        "Total": {
          "$sum": "$Feild.Charges"
        },
        "Additional Remarks": String
      }
    }

  );

  const handleStudentInfo = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      Stud_info: { ...prevData.Stud_info, ...data },
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <StudentInfo onDataUpdate={handleStudentInfo} />
      <hr />

      <Services 
        serviceInfo={serviceInfo} 
        setServiceInfo={setServiceInfo}
      />
      
      <hr />
      <section className="container">
        Signature of the student and, if the student is a minor, a parent or
        guardian:
        <input type="text" className="signature"></input>
      </section>

      <section className="container">
        <div id="btns">
          <Button variant="contained" id="submit-btn" onClick={handleClick}>
            Submit
          </Button>
          <Button variant="contained" id="print-btn">
            Print
          </Button>
        </div>
      </section>
    </>
  );
}

export default Submit;
