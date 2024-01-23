import React from "react";
import { Grid, Checkbox } from "@mui/material";
import moment from "moment";

function Invoice(props) {

  return (
    <>
      <section className="container">
        <div className="student-info">* Invoice</div>

        <div className="invoice">
          <Grid container spacing={5}>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
              Date
            </Grid>
            <Grid item xs={1}>
              Cash
            </Grid>
            <Grid item xs={1}>
              Online
            </Grid>
            <Grid item xs={3}>
              Charges
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={5}>
          {props.service.map((name, index) => (
            <>
              <Grid item xs={4} key={index}>
                <div>{name}</div>
              </Grid>

              <Grid item xs={3}>
                <input type="date" className="input-date"></input>
              </Grid>
              <Grid item xs={1}>
                <Checkbox />
              </Grid>
              <Grid item xs={1}>
                <Checkbox />
              </Grid>
              <Grid item xs={3}>
                <input type="text" className="remark"></input>
              </Grid>
            </>
          ))}
        </Grid>

        <div className="total">
          Total:<input type="text" className="total-input"></input>
        </div>
        <div>
          Additional Remarks:
          <input type="text" className="additional-remarks"></input>
        </div>
      </section>
    </>
  );
}

export default Invoice;
