import React, { useState } from "react";
import Button from "@mui/material/Button";
import StudentInfo from "./StudentInfo";
import Services from "./Services";
import Invoice from "./Invoice";

function Submit() {
  const [formData, setFormData] = useState({
    Stud_info: {},
    Services: {},
  });

  const handleStudentInfo = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      Stud_info: { ...prevData.Stud_info, ...data },
    }));
  };


  const handleServices = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      Services: { ...prevData.Services, ...data },
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const allData = {
      ...formData.Stud_info,
      ...formData.Services,
    };
    alert(JSON.stringify(allData, null, 2));
  };

  return (
    <>
      <StudentInfo onDataUpdate={handleStudentInfo} />      // working fine
      <hr />

      <Services onDataUpdate={handleServices}/>       // not working as per expectation
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
