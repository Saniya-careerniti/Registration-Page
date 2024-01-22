import React,{useEffect,useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Checkbox, Grid } from "@mui/material";
import Invoice from "./Invoice";
function Services() {
    const [selectedService, setSelectedService] = useState([]);
  const [serviceName, setServiceName] = useState([]);

  const services = [
    "Maharashtra Medical Admission Process",
    "All India Medical Admission Process",
    "AACCC (All India Ayush) Admission Process",
    "Maharashtra Ayush Admission Process",
    "Maharashtra Veterinary Admission Process",
    "All India Veterinary Admission Process",
    "Karnataka Medical Admission Process",
    "Karnataka Ayush Admission Process",
    "Other States Medical Admission process",
    "Maharashtra Engineering Admission Process",
    "JOSAA Admission Process",
    "BITSAT Admission Process",
    "Other Private Institutes Admission Process",
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedService(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    setServiceName(selectedService);
  }, [selectedService]);
 
    return ( 
        <>
        <section className="container">
          <div className="student-info">* Services</div>
          <div className="multi-select">
           <span  className="Admission-pro"> Admission Process:</span>
          <Select
           className="dropdown"
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedService}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            
              
          >
            {services.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>

       
          </div>
          <div className="services">
            <Grid container spacing={4}>
              <Grid item xs={4}></Grid>
              <Grid item xs={1}>
                Opt
              </Grid>
              <Grid item xs={1}>
                Delivered
              </Grid>
              <Grid item xs={6}>
                Remark
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="service-title">1.Career Guidance</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox/>
            </Grid>
            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="service-title">2.Career Counselling</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="service-title">3.Entrance Guidance</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="service-title">4.Entrance Counselling</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="service-title">5.Admission Guidance</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="service-title">6.Admission Counselling</span>
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>

            <Grid item xs={6}>
              <input type="text" className="remark"></input>
            </Grid>
          </Grid>
          Additional Process:
          <input type="text" className="additional"></input>
        </section>
        <hr/>
        <Invoice service={serviceName}/>
        </>
        
     );
}

export default Services;