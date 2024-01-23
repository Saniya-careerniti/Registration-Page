import React, { useState } from "react";
import Button from "@mui/material/Button";
import StudentInfo from "./StudentInfo";
import Services from "./Services";
import Invoice from "./Invoice";
function Submit() {
  const [formData, setFormData] = useState({
    Stud_info: {},
  });

  const handleComponent1Data = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      Stud_info: { ...prevData.Stud_info, ...data },
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <StudentInfo onDataUpdate={handleComponent1Data} />
      <hr />
      <Services />
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
