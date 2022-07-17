import React from "react"
import EmployeeTable from "./EmployeeTable";
import TextField from '@mui/material/TextField';
import Navbar from "../NavBar";
import { Button } from "@mui/material";


  export const Employee = () => {
    
    return (
      <div>
         <Navbar/>
        <h1>Employee List</h1>
        <TextField id="standard-basic" label="Search" variant="standard" />
        <EmployeeTable/>
        <br></br>
        <Button href='/employees/employeeadd' variant="contained">Add Employee</Button>
      </div>
    );
  }
export default Employee;