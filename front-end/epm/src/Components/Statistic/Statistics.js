import React from "react"
import CompanyStatistics from "./CompanyStatistics";
import ProjectStatistics from "./ProjectStatistics";
import Grid from '@mui/material/Grid';
import Navbar from "../NavBar";

  export const Statistic = () => {
    
    return (
        <div>
           <Navbar/>
            <h1>Statistics</h1>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <CompanyStatistics/>
          </Grid>
          <Grid item xs={5}>
            <ProjectStatistics/>
          </Grid>
        </Grid>
        </div>
    );
  }
export default Statistic;