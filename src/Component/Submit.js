import React from "react";
import Button from "@mui/material/Button";
function Submit() {
    return ( 
        <>
            <section className="container">
          Signature of the student and, if the student is a minor, a parent or
          guardian:
          <input type="text" className="signature"></input>
        </section>
        <section className="container">
          <div id="btns">
            <Button variant="contained" id="submit-btn">
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