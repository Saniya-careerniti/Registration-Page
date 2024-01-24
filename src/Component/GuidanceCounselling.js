import { Checkbox, Grid } from "@mui/material";
function GuidanceCounselling(props) {
  const { id, title, service_Info, handleFieldChange } = props;
  const serviceName = title.replace(/\s+/g, "_");

  const handleChange = (field, value) => {
    handleFieldChange(serviceName, field, value);
  };
    return ( 
    <>
     <Grid container spacing={4}>
          <Grid item xs={4}>
            <span className="service-title">{id}. {title}</span>
          </Grid>
          <Grid item xs={1}>
          <Checkbox
            name="Opt"
            checked={service_Info.Opted[serviceName]?.Opt}
            onChange={(e) => {
              handleChange("Opt", e.target.checked);
            }}
          />

          </Grid>
          <Grid item xs={1}>
          <Checkbox
            name="Delivered"
            checked={service_Info.Opted[serviceName]?.Dilevered}
            onChange={(e) => {
              handleChange("Dilevered", e.target.checked);
            }}
          />
          </Grid>
          <Grid item xs={6}>
            <input
              type="text"
              className="input"
              name="Delivered" 
               value={service_Info.Opted[serviceName]?.remark}
               onChange={(e)=>{
               handleChange("Remark",e.target.value)
           }}>
            </input>
          </Grid>
        </Grid>
    </> );
}

export default GuidanceCounselling;
